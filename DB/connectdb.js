const mongoose = require('mongoose');
const url = "mongodb://0.0.0.0:27017/admissionportal"
const live_Url = 'mongodb+srv://shrivastavanikhil514:Nikhil143@cluster0.qpbyrxb.mongodb.net/admissionportal?retryWrites=true&w=majority'

const connectdb = ()=>{
    return mongoose.connect(live_Url)
    .then(()=>{
        console.log("Connected Successfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = connectdb