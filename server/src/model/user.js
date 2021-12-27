const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname:{type: 'string', required: true,trim: true},
    lastname:{type: 'string', required: true,trim: true},
    title:{type: 'string',trim: true},
    phone:{type: 'string',required:true,trim: true},
    email:{type: 'string',required:true,trim: true},
    password:{type: 'string',required:true,trim: true,unique: true},
}, { timestamps: true });


const User = mongoose.model('User',userSchema);

module.exports = User;