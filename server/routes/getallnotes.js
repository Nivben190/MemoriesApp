const router =require("express").Router();
const{User}=require('../Models/user')

router.post('/',async (req,res)=>{
  try {
     const user= await User.findOne({email:req.body.email});
    let memories= user.memories;
    res.status(200).send({memories});
  } catch (error) {
    res.status(500).send(error.message);
  }

});
module.exports=router;