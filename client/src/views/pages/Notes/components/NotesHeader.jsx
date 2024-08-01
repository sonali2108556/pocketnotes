import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { getInitials } from "../../../../utils";
import { ArrowBack, DeleteForever } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function NotesHeader({ data,deleteGroupById,loading }) {
  const navigate = useNavigate();
  return (
    <Box className="write-notes">
      <Box className="notes-header">
        <Box display="flex" alignItems="center">
        <IconButton className="back-button" size="large" onClick={() => navigate("/")}>
          <ArrowBack sx={{ fontSize: '30px', color: 'white' }} />
        </IconButton>
        <Avatar sx={{ bgcolor: data.color, height: '55px', width: '55px' }}>{getInitials(data.name)}</Avatar>
        <Typography variant="h6" pl={2.5}>{data.name}</Typography>
        </Box>
        <IconButton disabled={loading} size="large" onClick={deleteGroupById}>
          <DeleteForever sx={{ fontSize: '30px', color: 'white' }} />
        </IconButton>
      </Box>
    </Box>
  )
}