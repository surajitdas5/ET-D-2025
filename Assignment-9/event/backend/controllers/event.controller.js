const Event = require("./../models/event.model.js")

const addEvent = async (req, res) =>{
    try {
        let event = req.body
        let fileName = req.file.filename
        event.eventImage = fileName
        event.status = 'active'
        console.log(event)
        event = await Event.create(event)
        res.status(201).send(event)
    } catch (error) {
        res.status(400).send({"message": error.message})
    }
}

const allEvents = async(req, res)=> {
    try {
        let events = await Event.find().populate("user", "-password");
        let modEvents = events.map( event => (
            {
                ...event.toObject(),
                eventImage: process.env.IMAGE_URL+event.eventImage
            }
        ))
        res.status(200).send(modEvents)
    } catch (error) {
        res.status(400).send({"message": error.message})
    }
}

const getEventById = async(req, res)=> {
    try {
        let { id } = req.params

        let event = await Event.findOne({_id: id}).populate("user", "-password");
        let modEvent =  {
            ...event.toObject(),
            eventImage: process.env.IMAGE_URL+event.eventImage
        }
        res.status(200).send(modEvent)
    } catch (error) {
        res.status(400).send({"message": error.message})
    }
}

const upcomingEvents = async(req, res)=> {
    try {
        const today = new Date();
        let events = await Event.find({ startDate: { $gte: today } }).populate("user", "-password");
        let modEvents = events.map( event => (
            {
                ...event.toObject(),
                eventImage: process.env.IMAGE_URL+event.eventImage
            }
        ))
        res.status(200).send(modEvents)
    } catch (error) {
        res.status(400).send({"message": error.message})
    }
}

const updateEventImage = async (req, res) =>{
    try {
        let { id } =req.params
        let fileName = req.file.filename
        let event = await Event.findByIdAndUpdate({_id: id}, {eventImage: fileName}, {new: true})
        res.status(200).send(event)
    } catch (error) {
        res.status(400).send({"message": error.message})
    }
}


// Search events by title
const searchEventsByTitle = async (req, res) => {
  const { title } = req.query;
  if (!title) {
    return res.status(400).json({ message: 'Title query parameter is required' });
  }
  try {
    const events = await Event.find({
      title: { $regex: title, $options: 'i' },
    }).populate("user", "-password");

    if (events.length === 0) {
      return res.status(404).json({ message: 'No events found with the given title' });
    }
    let modEvents = events.map( event => (
        {
            ...event.toObject(),
            eventImage: process.env.IMAGE_URL+event.eventImage
        }
    ))
    res.status(200).send(modEvents)

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {  };


module.exports = {
    addEvent,
    allEvents,
    getEventById,
    upcomingEvents,
    updateEventImage,
    searchEventsByTitle
}