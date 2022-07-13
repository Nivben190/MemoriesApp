const mongoose =require("mongoose");

const noteSchema=  new mongoose.Schema({
        Header:{type:String,require:true},
        Body:{type:String,require:true},
        Footer:{type:String,require:true},
        ImgSrc:String,
        createdBy:
        {
                type:String,
                ref:"user",
                require:[true,"Please provide user"]
        }      
})
const Notes= mongoose.model("note",noteSchema);

module.exports={Notes};


