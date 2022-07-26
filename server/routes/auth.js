const router =require("express").Router();
const Joi= require("joi");
const loginUser =require("../controllers/loginUser");

router.post("/",loginUser);

router.get('/', (req, res) => {
    return res.redirect('/');
  });


module.exports=router;