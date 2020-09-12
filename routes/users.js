const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');


//@route   api/users
//@desc    Reister a user
//@access  public
router.post('/',(req, res)=>{
    res.json(req.body);
});
module.exports = router;