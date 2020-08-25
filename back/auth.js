const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.authentificate = (email,password)=>{

    return new Promise(async (resolve,reject)=>{
        try{
            const user = await User.findOne({email});
            bcrypt.compare(password,user.password,(err,isMatch)=>{
                if(err) throw err;
                if(isMatch){
                    resolve(user);
                }else{
                    reject('failed')
                }
            })
        }catch(err){
            reject('Authentification failed')
        }
    });
}