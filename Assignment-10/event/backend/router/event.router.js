const express = require('express')

const {
    addEvent,
    allEvents,
    getEventById,
    updateEvent,
    updateEventImage,
    upcomingEvents,
    searchEventsByTitle,
    deleteEvent
} = require('./../controllers/event.controller.js')
const upload = require('./../middleware/fileUpload.middleware.js');
const verifyToken = require('../middleware/auth.middleware.js');

const eventRouter = express.Router();

eventRouter.post("/", verifyToken, upload.single('eventImage'), addEvent)
eventRouter.get("/",  allEvents)
eventRouter.get("/upcoming",  upcomingEvents)
eventRouter.get("/search",  searchEventsByTitle)
eventRouter.get("/:id",  getEventById)
eventRouter.put("/:id", verifyToken,  updateEvent)
eventRouter.delete("/:id", verifyToken,  deleteEvent)
eventRouter.put("/image/:id",upload.single('eventImage'),  updateEventImage)
// eventRouter.put("/:id",  getEventById)


module.exports = eventRouter