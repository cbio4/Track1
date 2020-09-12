const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.json('Get logged in user');
});
router.post('/', (req,res) => {
    res.json('log in user');
});
module.exports=router;

