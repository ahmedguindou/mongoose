const Contact = require("../models/Contact");


exports.addContact=async(req,res)=>{
    const {name,email,age}=req.body;
    
    try {
        const contact = new Contact({
            name,
            email,
            age,
        });
        await contact.save();
        res.send({msg:"contact added",contact})
    } catch (error) {
        res.status(500).send("server error");
    }

};

exports.getAllcontacts=async(req,res)=>{
    try {
        const contacts = await Contact.find();
        res.send(contacts)
    } catch (error) {
        res.status(500).send("server error");
    }
};

exports.deleteContact=async(req,res)=>{
    const {contactId}=req.params
    try {
        await Contact.findByIdAndDelete(contactId);
        res.send("contact deleted");
    } catch (error) {
        res.status(500).send("server error");
    }
};

exports.updateContact=async(req,res)=>{
    const { contactId}=req.params;
    try {
        const contact = await Contact.findByIdAndUpdate(contactId,{$set:{...req.body}})
        res.send({msg:"contact update", contact})
    } catch (error) {
        res.status(500).send("server error");
    }
};
exports.getOneContact=async(req,res)=>{
    const { contactId}=req.params;
    try {
        const contact = await Contact.findById(ContactId)
        res.send(contact)
    } catch (error) {
        res.status(500).send("server error");
    }
};


