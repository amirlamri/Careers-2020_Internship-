const errors = require('restify-errors');

const User =require('../models/User.js');
const bcrypt =require('bcryptjs');
module.exports = server => {
    // Add employe

    server.post('/employes',async(req,res,next)=>{
        // check for JSON 
        if(!req.is('application/json')){
            
            return next(new errors.InvalidContentError("Expects 'application/JSON'"));
         }
      //  const {FirstName,LastName,Adress,CIN,CNSS,RIB,BirthD,HiringDate,FamilyStatus,NetSalary,BrutSalary,email,password } = req.body;
     const data = req.body || {}
   
        //  const user = new User({
        //     FirstName,LastName,Adress,CIN,CNSS,RIB,BirthD,HiringDate,FamilyStatus,NetSalary,BrutSalary, email, password
           
        //  });
        const user = new User(data);
         try{
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(user.password,salt,async(err,hash)=>{
                    user.password = hash;
                    //save User 
                    try{
                        const newUser = user.save();
                     
                        
                        res.send(200);
                        next();
   
                    }catch(err){
                       return next(new errors.InternalError(err.message));
                    }
                });
            })
         }catch(err){
            return next(new errors.InternalError(err.message));
         }
      

        
    });
    // upload 
    

    // update employe 
    server.put('/employes:id',async(req,res,next)=>{
        // check for JSON 
        
        if(!req.is('application/json')){
            
            return next(new errors.InvalidContentError("Expects 'application/JSON'"));
         }



         try{
            const newUser = await User.findOneAndUpdate({_id:req.params.id},req.body);
            res.send(200);
            next();
         }catch(err){
            return next(new errors.ResourceNotFoundError('THere is no collaborator by that id'));
         }
    });

    //GET Single collaborator
 
     server.get('/employes/:id',async (req,res,next)=> {

        try{
            const user = await User.findById(req.params.id);
            res.send(user);
           next();
        }catch(err){
            return next(new errors.ResourceNotFoundError('THere is no collaborator by that id'));
             
        }
   
    });


    //GET all Employes 
    server.get('/employes',async (req,res,next)=> {

        try{
            const user = await User.find({});
            res.send(user);
           next();
        }catch(err){
            return next(new errors.InvalidContentError(err));
             
        }
   
    });

    // del employe 
    server.del('/employes/:id',async(req,res,next)=>{
        try {
            const user = await User.findOneAndRemove({_id:req.params.id})
            res.send(204);
            next();
        } catch (err) {
            
        }
    })
};