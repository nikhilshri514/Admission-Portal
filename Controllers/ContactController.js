const ContactModal = require('../modals/Contact')
class ContactController{
    static feeds=async(req,res)=>{
        try{
            const{_id,name,email,feedback} = req.user
            // console.log(req.body)
            const contact = req.body.Contact
            const data=new ContactModal({
            name:req.body.name,
            email:req.body.email,
            feedback:req.body.feedback
            })
                await data.save()
                res.redirect('/dashboard')
    
        }catch(error){
            console.log(error)
        }
    }
}
module.exports = ContactController
