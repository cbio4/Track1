const express = require('express');
const router = express.Router();
const User = require('../models/User');


//@route   api/users
//@desc    Reister a user
//@access  public
router.post('/',(req, res)=>{ 
    const post = new User({
        name :req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err =>{
        res.json({message:err});
    });
    
});
module.exports = router;