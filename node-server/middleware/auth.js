const jwt = require("jsonwebtoken")
const Admin = require('../model/admin.model')

const auth = async (req, res, next) => {
    try { 
        const token = req.header('Authorization').replace('Bearer ','');
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        const user = await Admin.findOne({_id: decoded._id , 'tokens.token': token})
        if(!user){
            throw new Error("User not found")
        }
        req.token = token
        req.user = user
        next()
    } catch(e) {
        res.status(401).send({error: "Please Authenticate"})
    }
}

module.exports = auth