const router =require("express").Router();
const{User,validate}=require('../Models/user')
const bcrypt =require("bcrypt");
const registerUser=require("../controllers/registerUser.")
router.post("/",registerUser);


module.exports=router;