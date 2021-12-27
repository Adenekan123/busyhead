const mongoose = require('mongoose');

const TodoSchema =  new mongoose.Schema({
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
        completed:{type:Boolean,default:false},
        date:{type:String,default: new Date().toLocaleDateString()},
        time:{type:String},
    }]
});

const Todo = mongoose.model('Todo',TodoSchema);

module.exports = Todo;