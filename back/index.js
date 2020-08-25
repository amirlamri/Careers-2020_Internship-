const restify = require('restify');
const mongoose = require('mongoose');
const config = require('./config');
const rjwt = require('restify-jwt-community');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const { resolve } = require('path');
const server = restify.createServer();

//Middlware 
server.use(restify.plugins.bodyParser());
server.use(methodOverride('_method'));
 

//protected routes

server.use(rjwt({
    secret :config.JWT_SECRET
}).unless({path:['/auth']}))



server.listen(config.PORT,()=>{
    mongoose.set('useFindAndModify',false);
    mongoose.set('useCreateIndex', true);
    mongoose.set( 'useUnifiedTopology',true);
 
    mongoose.connect(
        config.MONGODB_URI,
        {useNewUrlParser: true, useUnifiedTopology:true})

});



const db = mongoose.connection;

db.on('error',(err)=> { 
    console.log(err);
});
db.once('open',()=>{  
    require('./routes/employes') (server);   
    require('./routes/users') (server);
   
    console.log(`Server started on port ${config.PORT}`);
});
