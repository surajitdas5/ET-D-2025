const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname, "public")))

// routes
app.get("/", (req, res)=>{
    // res.send("<h1>Hello Form Express Server")
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get("/about", (req, res)=>{
    // res.send("<h1>About Express Server")
    res.sendFile(path.join(__dirname, "public", "about.html"))
})

app.listen(5000, function(){console.log("Server Started at 5000")})

