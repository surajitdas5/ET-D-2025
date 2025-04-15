const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    let authHeader = req.header('Authorization')
    // console.log(authHeader);
    if(!authHeader){
        return res.status(400).send({"message": "Token not found"})
    }

    let token = authHeader.split(" ")[1]
    try{
        let decoded = jwt.verify(token, process.env.JWT_SECRET)
       console.log(decoded)
       req.user = decoded
       next()
    } catch {
        return res.status(400).send({"message": "Invalid Token"})
    }
    
}

module.exports = verifyToken