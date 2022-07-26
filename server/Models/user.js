const mongoose =require("mongoose");
const jwt =require("jsonwebtoken");
const Joi =require("joi");
const {Notes} =require("./Notes")
const passwordComplexity =require("joi-password-complexity");
const { object, string } = require("joi");

const noteSchema= mongoose.Schema({
    Header:{type:String,require:true},
    Body:{type:String,require:true},
    Footer:{type:String,require:true},
    ImgSrc:{type:String,require:true},
    createdBy:
    {
            type:mongoose.Types.ObjectId,
            ref:"user",
            require:[true,"Please provide user"]
    }      
})

const userSchema= new mongoose.Schema({      
    firstName:{type:String,require:true},
    lastName:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    profileImg:String,
    memories:[{type:noteSchema}]});


userSchema.methods.generateAuthToken= function(){
    const token =jwt.sign({_id:this._id},"jwtSecret",{expiresIn:"7d"});
    return token;
}

const User= mongoose.model("userim",userSchema);

const validate=(data)=>{
    const schema=Joi.object({
        firstName:  Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),    
        email:Joi.string().email().required().label("Email"),
        password:passwordComplexity().required().label("Password"),
        profileImg: Joi.string().label("profileImg"),
  });
  return schema.validate(data)
}

module.exports={User,validate};

