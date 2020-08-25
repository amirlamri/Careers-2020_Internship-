const errors = require('restify-errors');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const auth = require('../auth');
const config = require('../config');

module.exports = server => {

    server.post('/register',(req,res,next)=>{
         const {email,password}= req.body;
         const user = new User ({
             email,
             password,
         });
         bcrypt.genSalt(5,(err,salt)=>{
          
             bcrypt.hash(user.password,salt,async(err,hash)=>{
                 user.password = hash;
                 //save User 
                 try{
                     const newUser = user.save();
                     res.send(200);
                     next();

                 }catch(err){
                    return next(new errors.InternalError(err.message))
                 }
             });
         })
    });
// auth user 
    server.post('/auth',async(req,res,next)=>{
        const {email,password} = req.body;
        try {
                //authentificate user
                const user = await auth.authentificate(email,password);
              
                //Creat jwt
                const token = jwt.sign(user.toJSON(),config.JWT_SECRET,{
                    expiresIn: '30m'
                });
                //Respond with token
                const {_id,iat,exp} = jwt.decode(token);
                res.send({_id,iat,exp,token});
          
                next();
                console.log(user);

        } catch (err) {
            return next(new errors.UnauthorizedError(err));
        }

    })
}