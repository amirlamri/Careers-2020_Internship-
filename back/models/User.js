const mongoose = require('mongoose');
const timeStamp = require('mongoose-timestamp');
const unique = require('mongoose-unique-validator');
const UserSchema = new mongoose.Schema({

    FirstName:{
        type:String,
        required:true,
        trim:true,
    },
    LastName:{
        type:String,
        required:true,
        trim:true,    

    },
    CIN:{
        type:String,
        required:true,
        trim:true, 
    },
    CNSS:{
        type:String,
        required:true,
        trim:true, 
    },
    RIB:{
        type:Number,
        required:true,
    },
    BirthD:{
        type:String,
        required:true,
    },
    Adress:{
        type:String,
        required:true,
        trim:true, 
    },
    FamilyStatus:{
        type:String,
        required:true,
        trim:true, 

    },
    HiringDate:{
        type:Date,
        required:true,
        default:new Date(),
    },
    NetSalary:{
        type:Number,
        required:true,
    },
    BrutSalary:{
        type:Number,
        required:true,
    },
     
    email:{
        type:String,  
        unique:true
    },
    password:{
        type:String,  
        unique:true
    },
 
 

 

});
UserSchema.plugin(unique);
UserSchema.plugin(timeStamp);
const User = mongoose.model('User',UserSchema);

module.exports = User;