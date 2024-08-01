import { Box, Button, Paper, Typography } from "@mui/material";
import moment from "moment";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function NotesContent({ data, deleteNoteById, loading }) {
  return (
    <Box className="notes-body custom-scrollbar">
      <Box className="notes-bg">
        {data.map(item => {
          return (
            <Paper key={item._id} className="notes-item">
              <Box>
                <Typography variant="body1" pb={2}>{item.note}</Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Button disabled={loading} color="error" sx={{ textTransform: 'capitalize' }} onClick={() => deleteNoteById(item._id)}>Delete</Button>
                  <Typography className="notes-item-time" variant="body1" >
                    <span>{moment(item.createdAt).format('DD MMM YYYY')}</span>
                    <FiberManualRecordIcon sx={{ fontSize: '10px' }} />
                    <span>{moment(item.createdAt).format('hh:mm A')}</span>
                  </Typography>
                </Box>
              </Box>
            </Paper>
          );
        })}
        {
          data.length === 0 && (
            <Typography>Add some notes...</Typography>
          )
        }
      </Box>
    </Box>
  )
}