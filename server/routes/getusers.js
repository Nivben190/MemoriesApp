const router =require("express").Router();
const{User}=require('../Models/user')

router.post('/',async (req,res)=>{
  try {
     const user= await User.findOne({email:req.body.email});
    res.status(200).send({user});
  } catch (error) {
    
  }

});
module.exports=router;