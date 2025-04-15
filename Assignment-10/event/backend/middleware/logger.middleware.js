function logger(req, res, next){
    console.log("Logged...")
    next()
}


module.exports = logger