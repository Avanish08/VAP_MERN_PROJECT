 const joi = require("joi");

const Regisvalid =(req,res,next)=>{
    const schema =joi.object(
        {
            Username:joi.string().min(3).max(100).required(),
            AddharCard:joi.string().min(12).max(12).required(),
            Email:joi.string().email().required(),
            Password:joi.string().min(4).max(100).required(),
            ConfirmPassword:joi.string().min(4).max(100).required(),
        }
    );
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({message:"Bad request",error})
    }
    next();
}

const Loginvalid =(req,res,next)=>{
    const schema =joi.object(
        {
            Username:joi.string().min(3).max(100).required(),
            Password:joi.string().min(4).max(100).required(),
        }
    );
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({message:"Bad request",error})
    }
    next();
}
module.exports={
    Regisvalid,
    Loginvalid
}