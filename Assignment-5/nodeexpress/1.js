const fs = require('fs')

// console.log(__dirname)
// console.log(__filename)

console.log("Start");

// fs.readFile("info.txt", "utf-8", (error, data)=>{
//     if(error){
//         console.log(error);
//     } else {
//         console.log(data)
//     }
// })

// let data = fs.readFileSync("info.txt", "utf-8")
// console.log(data);


// fs.writeFile("info.txt", "New Data", (err)=>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log("Content Written");
//     }
// })


// fs.appendFile("info.txt", "\nSome more data", (err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log("File Updated")
//     }
// })

fs.unlink("info.txt", (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("File removed")
    }
})


console.log("End");