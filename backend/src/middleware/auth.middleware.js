const foodPartnerModel = require("../models/foodpartner.model")
const jwt = require ("jsonwebtoken");

async function authFoodPartnerMiddleware (req,res,next){
    const token = req.cookies.token;
    
    if (!token){
        return res.status(401).json({
            message:"Unauthorised Access"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const foodPartner = await foodPartnerModel.findById(decoded.id);

         res.foodPartner = foodPartner

         next()

    }catch(err){
        return res.status(401).json({
            message : "Invalid Token"
        })
    }
}

module.exports = {
    authFoodPartnerMiddleware
}