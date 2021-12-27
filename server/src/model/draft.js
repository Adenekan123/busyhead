const mongoose = require('mongoose');

const draftSchema =  new mongoose.Schema({
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
        description:{type:String,trim:true},
        date:{type:String,default: new Date().toLocaleDateString()},
        time:{type:String}
    }]
});

const Draft = mongoose.model('Draft',draftSchema);

module.exports = Draft;