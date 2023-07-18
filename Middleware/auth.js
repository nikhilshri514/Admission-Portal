const jwt = require('jsonwebtoken')
// const usermodal = require('../modals/User')
const UserModal = require('../modals/User')
const { request } = require('express')


const CheckUserAuth = async(req,res,next)=>{
    // console.log('heloo user')
    const{token}=req.cookies
    // console.log(token)
    if(!token){
        // console.log("hello")
        req.flash('error','Unauthorized user,Please Login!')
        return res.redirect('/')
    }
    else{
        const verify_token = jwt.verify(token,'Niki514')
        const data = await UserModal.findOne({_id:verify_token.id})
        // console.log(data)
        req.user=data
        // console.log(verify_token)
        next()
    }
    
}
module.exports = CheckUserAuth