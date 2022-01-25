const express=require('express');
const { addContact, getAllcontacts, deleteContact , updateContact, getOneContact } = require('../controllers/contactController');
const router=express.Router();


//url/api/contacts/test
router.get('/test',(req,res)=>{
    res.send("Hello")
});

// desc add new contact 
// method post
// req.body
// url/api/contacts
router.post('/',addContact);


// desc get all contacts
//method get


router.get('/',getAllcontacts);


//desc delete contact 
//method delete
// req.params

router.delete('/',deleteContact);

//desc update contact
// method put 
// req.body 
//req.params
router.put("/:contactId",updateContact);


//desc get one contact
//method get 
//req.params

router.get('/:contactId',getOneContact)



module.exports = router;