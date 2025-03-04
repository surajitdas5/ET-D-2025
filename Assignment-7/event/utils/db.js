const mongoose = require('mongoose')

const DB_URL = "YOUR_DB_STRING"
const DB_NAME = "event-d"

async function dbConnect(){
    try {
        await mongoose.connect(`${DB_URL}/${DB_NAME}`)
        console.log("Databse Connected")
    } catch (error) {
        throw error
    }
}

module.exports = dbConnect