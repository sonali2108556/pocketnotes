import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../../context/AppProvider";
import NotesHeader from "./components/NotesHeader";
import NotesContent from "./components/NotesContent";
import WriteNotes from "./components/WriteNotes";

const Notes = () => {
  const { groupId } = useParams();
  const { getNotesByGroupId, notesByGroup, createNewNote,deleteGroup,deleteNoteById,loading } = useContext(AppContext);
  const navigate=useNavigate();
  const [noteText, setNoteText] = useState('');
  const handleChangeNoteText = (e) => {
    setNoteText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewNote(groupId, noteText)
    setNoteText('');
  }
  const deleteGroupById=()=>{
    deleteGroup(groupId);
    navigate('/')
  }
  useEffect(() => {
    getNotesByGroupId(groupId);
    setNoteText('');
  }, [groupId]);

  if (notesByGroup) {
    return (
      <>
        <NotesHeader data={notesByGroup.group} deleteGroupById={deleteGroupById} loading={loading} />
        <NotesContent data={notesByGroup.notes} deleteNoteById={deleteNoteById} loading={loading}/>
        <WriteNotes handleChangeNoteText={handleChangeNoteText} noteText={noteText} handleSubmit={handleSubmit} loading={loading}/>
      </>
    );
  }
  else {
    return null;
  }
}
export default Notes;