import { Send } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

export default function WriteNotes({ handleSubmit, noteText, handleChangeNoteText, loading }) {
  return (
    <Box className="write-notes" component="form" onSubmit={handleSubmit}>
      <Box className="write-box-container">
        <textarea disabled={loading} rows={8} className="write-textbox custom-scrollbar" placeholder="Write your notes here..." value={noteText} onChange={handleChangeNoteText} />
        <Box className="send-button">
          <IconButton type="submit" disabled={noteText.length === 0 || loading}><Send sx={{ fontSize: '40px' }} /></IconButton>
        </Box>
      </Box>
    </Box>
  )
}