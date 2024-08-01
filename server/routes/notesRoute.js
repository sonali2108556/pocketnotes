const express = require('express');
const router = express.Router();
const Note = require('../models/notesModel');
const Group = require('../models/groupModel');

router.post('/', async (req, res) => {
  try {
    const note = new Note({
      groupId: req.body.groupId,
      note: req.body.note
    });
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.delete('/delete/:noteId',async(req,res)=>{
  try {
    const result = await Note.findByIdAndDelete(req.params.noteId);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

router.get('/:groupId', async (req, res) => {
  try {
    const group = await Group.findById(req.params.groupId);
    const notes = await Note.find({ groupId: req.params.groupId }).select("-groupId").sort({ createdAt: 1 });

    const result={
      group,
      notes:notes
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
