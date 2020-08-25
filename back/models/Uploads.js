const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator')

const UploadSchema = new mongoose.Schema({

    
 
    employe : {
        type: mongoose.Schema.Types.ObjectId, ref:'Employe'
    }
    

});
UploadSchema.plugin(unique);
const Uploads = mongoose.model('Uploads',UploadSchema);

module.exports = Uploads;