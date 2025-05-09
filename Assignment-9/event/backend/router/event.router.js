const express = require('express')

const {
    addEvent,
    allEvents,
    getEventById,
    updateEvent,
    updateEventImage,
    upcomingEvents,
    searchEventsByTitle
} = require('./../controllers/event.controller.js')
const upload = require('./../middleware/fileUpload.middleware.js')

const eventRouter = express.Router();

eventRouter.post("/", upload.single('eventImage'), addEvent)
eventRouter.get("/",  allEvents)
eventRouter.get("/upcoming",  upcomingEvents)
eventRouter.get("/search",  searchEventsByTitle)
eventRouter.get("/:id",  getEventById)
eventRouter.put("/:id",  updateEvent)
eventRouter.put("/image/:id",upload.single('eventImage'),  updateEventImage)
// eventRouter.put("/:id",  getEventById)


module.exports = eventRouter