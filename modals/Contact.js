const mongoose = require('mongoose');
// define schema
const ContactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true
    }
},{timestamps:true})
//create collection
const ContactModal=mongoose.model('contact',ContactSchema)
module.exports = ContactModal;
