const express = require('express');
const router = express.Router();
const Group = require('../models/groupModel');
const Note = require('../models/notesModel');

router.post('/', async (req, res) => {
  try {
    const newGroup = new Group(req.body);
    const savedGroup = await newGroup.save();
    res.status(201).json(savedGroup);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const groups = await Group.find();
    res.status(200).json(groups);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.delete("/:groupId",async(req,res)=>{
  try {
    await Note.deleteMany({groupId:req.params.groupId});
    const result = await Group.findByIdAndDelete(req.params.groupId);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

})
module.exports = router;
