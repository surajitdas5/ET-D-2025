const express = require('express')
const dbConnect = require('./utils/db.js')
const userRouter = require('./router/user.router.js')

const PORT = 5000;
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.send("Welcome to Event Portal");
})

app.use(userRouter)


app.listen(PORT, function(){
    console.log(`Server strated at ${PORT}`)
    dbConnect();
})