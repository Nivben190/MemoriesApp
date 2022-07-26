const router =require("express").Router();
const{User,validate}=require('../Models/user')
const bcrypt =require("bcrypt");


module.exports= async(req,res)=>
{
    try {
    const {error} =validate(req.body);
    if(error) return res.status(400).send({message: error.details[0].message});
    
   const user=await User.findOne({email:req.body.email});
   if(user) return res.status(409).send({message:"User with given email already exist"});
   const salt = await bcrypt.genSalt(Number(process.env.SALT));
   const hashPassword= await bcrypt.hash(req.body.password,salt);

  const niv= await new User({...req.body,password:hashPassword}).save();
   res.status(200).send({message:"User Created Succesfully",niv});

} catch (error) {
    res.status(500).send({message:error.message});
}
}