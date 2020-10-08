const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Contact = require("../models/Contacts");
const User = require("../models/User");
const { findByIdAndRemove } = require("../models/Contacts");

router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(400).json("server error");
  }
  _;
});
router.post("/", auth, async (req, res) => {
  const { name, email, phone, type } = req.body;
  console.log("1");
  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      type,
      user: req.user.id,
    });
    const contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(400).json("server error");
  }
});
router.put("/:id", auth, async (req, res) => {
  const { name, email, phone, type } = req.body;
  // Build contact object
  const contactFields = {};
  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;
  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: "contact not found" });
    console.log('1');  
    //make sure user owns contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "user not authorized" });
    }
    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(400).json("server error");
  }
});
router.delete("/:id", auth, async(req, res) => {
  
  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: "contact not found" });
    
    //make sure user owns contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "user not authorized" });
    }
    await Contact.findByIdAndRemove(req.params.id);
    res.json({msg:'contact removed'});
    
  } catch (err) {
    console.error(err.message);
    res.status(400).json("server error");
  }
});
 

module.exports = router;
