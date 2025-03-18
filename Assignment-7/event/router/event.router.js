const express = require('express')

const {
    addEvent,
    allEvents,
    getEventById,
    updateEventImage
} = require('./../controllers/event.controller.js')
const upload = require('./../middleware/fileUpload.middleware.js')

const eventRouter = express.Router();

eventRouter.post("/", upload.single('eventImage'), addEvent)
eventRouter.get("/",  allEvents)
eventRouter.get("/:id",  getEventById)
eventRouter.put("/image/:id",upload.single('eventImage'),  updateEventImage)
// eventRouter.put("/:id",  getEventById)


module.exports = eventRouter