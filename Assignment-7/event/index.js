const path = require('path')
const express = require('express')
const dbConnect = require('./utils/db.js')
const userRouter = require('./router/user.router.js')
const eventRouter = require('./router/event.router.js')
const logger = require('./middleware/logger.middleware.js')
const upload = require('./middleware/fileUpload.middleware.js')

// const dotenv = require('dotenv');
// dotenv.config();
// or
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/uploads", express.static(path.join(__dirname, 'uploads')))
// app.use(logger)


app.get("/", (req, res)=>{
    res.send("Welcome to Event Portal");
})

app.post("/",upload.single('myImage'), (req, res)=>{
    // console.log(req)
    console.log(req.file)
    res.send("Okay");
})

// app.use(userRouter)
app.use("/users", userRouter)
app.use("/events", eventRouter)

app.listen(PORT, function(){
    console.log(`Server strated at ${PORT}`)
    dbConnect();
})