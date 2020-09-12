const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.json('add contact');
});
router.put('/:id', (req, res) => {
    res.json('update contact');
});
router.delete('/', (req, res) => {
    res.json('delete contact');
});

module.exports=router;
