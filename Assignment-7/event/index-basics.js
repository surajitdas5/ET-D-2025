const express = require('express')

const PORT = 5000;
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.send("Welcome to Event Portal");
})

app.get('/users', (req, res)=>{
    res.send("All Users")
})

app.get('/users/:id', (req, res)=>{
    // let data = req.params
    let { id } = req.params
    console.log(id);
    res.send("Single User Details of "+id)
})

app.post('/users', (req, res)=>{
    let user = req.body
    console.log(user)
    res.status(201).send("user Added")
})

app.put("/users/:id", (req, res)=>{
    let user = req.body
    let { id } = req.params
    console.log(user)
    res.status(200).send(`user ${id} updated with new data`)
})


app.delete("/users/:id", (req, res)=>{
    let { id }= req.params
    res.send(`user with ${id} deleted`)
})

app.listen(PORT, function(){
    console.log(`Server strated at ${PORT}`)
})