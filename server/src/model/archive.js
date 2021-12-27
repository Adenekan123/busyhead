const mongoose = require('mongoose');

const ArchiveSchema =  new mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        required:true
    },
    date:{
        require: true,
        type:String,
        default: new Date().toLocaleDateString()
    },
    tasks:[{
        title:{type:String,required:true,trim:true},
        description:{type:String,trim:true,required:true},
        date:{type:String,default: new Date().toLocaleDateString()},
        time:{type:String}
    }]
});

const Archive = mongoose.model('Archive',ArchiveSchema);

module.exports = Archive;