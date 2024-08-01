const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  groupId: { type: String, required: true },
  note: { type: String, required: true },
}, { timestamps: true });

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
