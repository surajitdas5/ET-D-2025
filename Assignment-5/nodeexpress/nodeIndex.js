const fs = require('fs')
const http = require('http')

const server = http.createServer(function(req, res){
    let url = req.url
    console.log(url);
    if(url == "/"){
        // res.write("<h1>Hello World!</h1>")
        // res.end()
        fs.readFile("public/index.html", "utf-8",(err, data) => {
            if(err){
                res.write("<h1>500 : Server Error</h1>")
            } else {
                res.write(data)
            }
            res.end()
        } )
    }else if(url == "/about"){
        // res.write("<h1>About Us</h1>")
        // res.end()
        fs.readFile("public/about.html", "utf-8",(err, data) => {
            if(err){
                res.write("<h1>500 : Server Error</h1>")
            } else {
                res.write(data)
            }
            res.end()
        } )
    } else {
        res.write("<h1>404 : Page not found</h1>")
        res.end()
    }
    
})


server.listen(5000, function(){console.log("Server Started")})