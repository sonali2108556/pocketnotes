import { Box, Typography } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';

function Home(props) {
  return (
    <>
      <Box className="home-container">
        <Box className="bg-image" />
        <Box className="home-content">
          <Typography variant="h3" fontWeight={700} letterSpacing="2px">Pocket Notes</Typography>
          <Typography variant="body1">Send and receive messages without keeping your phone online.
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone</Typography>
        </Box>

      </Box>
      <Box className="encryption">
        <LockIcon sx={{ fontSize: "21px" }} /><Typography variant="body1">end-to-end encrypted</Typography>
      </Box>
    </>
  )
}
export default Home;