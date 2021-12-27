const mongoose = require('mongoose');

const recycleSchema = mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        required:true
    },
    date:{type:String,trim:true,default:new Date().toLocaleDateString()},
    tasks:[{
        date:{type:String,trim:true,default:new Date().toLocaleDateString()},
        time:{type:String},
        title:{type:String,required:true,trim:true},
        description:{type:String,trim:true,required:true},
    }]
});


const Recycle = mongoose.model('Recycle',recycleSchema);

module.exports = Recycle;