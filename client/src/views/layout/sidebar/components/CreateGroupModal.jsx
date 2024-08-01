import { Box, Button, Modal, Typography } from "@mui/material";
import { colors } from "../data";

const CreateGroupModal = ({ open, handleClose, groupData, handleChange, handleCreateButton, loading }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box className="modal" component="form" onSubmit={handleCreateButton}>
        <Typography variant="h5">
          Create New group
        </Typography>
        <Box className="create-group-name">
          <Typography variant="h6" sx={{ fontWeight: 400 }}>Group Name</Typography>
          <Box className="input-text-container">
            <input disabled={loading} required value={groupData.name} onChange={handleChange} name="name" type="text" placeholder="Enter group name" />
          </Box>

        </Box>
        <Box className="create-group-name">
          <Typography variant="h6" sx={{ fontWeight: 400 }}>Group Color</Typography>
          <Box display={"flex"} gap={"5px"}>
            {
              colors.map(item => <Box key={item.color} onClick={() => handleChange(null, item.color)} className="circle" sx={{ bgcolor: item.color, border: item.color == groupData.color ? '2px solid black' : '2px solid white' }} />)
            }
          </Box>

        </Box>
        <Box textAlign={"end"} mt={5}>
          <Button type="submit" disabled={groupData.name === '' || loading} variant="contained" color="primary" className="create-button">
            Create
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}
export default CreateGroupModal;