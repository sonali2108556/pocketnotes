import { Avatar, Box, Button, IconButton, ListItem, MenuItem, Modal, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppProvider";
import { useNavigate, useParams } from "react-router-dom";
import { getInitials } from "../../../utils";
import { Add } from "@mui/icons-material";
import { colors } from "./data";
import CreateGroupModal from "./components/CreateGroupModal";


const SidebarItem = ({ item, handleClick, groupId,loading }) => {
  return (
    <MenuItem disabled={loading} onClick={() => handleClick(item)} selected={item._id === groupId}>
      <Box display="flex" alignItems="center" render px={2}>
        <Avatar sx={{ bgcolor: item.color, height: '55px', width: '55px' }}>{getInitials(item.name)}</Avatar>
        <Typography variant="h6" pl={2.5}>{item.name}</Typography>
      </Box>
    </MenuItem>
  )
};

const Sidebar = () => {
  const { noteGoups, createNewGroup, loading } = useContext(AppContext);
  const navigate = useNavigate();
  const { groupId } = useParams();

  const [modalOpen, setModalOpen] = useState(false);

  const initialGd = {
    name: '',
    color: colors[0]
  }
  const [groupData, setGroupData] = useState(initialGd)
  const handleClick = (item) => {
    if (!loading)
      navigate("/notes/" + item._id);
  }

  const handleChangeGroupData = (e, data) => {
    if (e) {
      setGroupData({ ...groupData, name: e.target.value });
    } else {
      setGroupData({ ...groupData, color: data })
    }
  }
  const handlePlusButton = (e) => {
    setModalOpen(!modalOpen);
  }
  const handleCreateButton = (e) => {
    e.preventDefault();
    createNewGroup(groupData);
    setModalOpen(false);
    setGroupData(initialGd);
  }

  return (
    <Box className="sidebar">
      <CreateGroupModal
        open={modalOpen}
        handleClose={handlePlusButton}
        groupData={groupData}
        handleChange={handleChangeGroupData}
        handleCreateButton={handleCreateButton}
        loading={loading}
      />
      <Typography className="sidebar-heading" variant="h3" onClick={() => navigate("/")}>Pocket Notes</Typography>

      <Box className="sidebar-content custom-scrollbar">
        {
          noteGoups.map(item => {
            return (
              <SidebarItem key={item._id} item={item} handleClick={handleClick} groupId={groupId} loading={loading} />
            )
          })
        }
      </Box>
      <Box textAlign="end" pt={1} pr={2}>
        <IconButton disabled={loading}
          sx={{ backgroundColor: '#16008B', color: 'white', ':hover': { backgroundColor: '#16008B' }, ':disabled': { backgroundColor: '#001F8B60', color: 'white' } }}
          onClick={handlePlusButton}>
          <Add sx={{ fontSize: '50px' }} />
        </IconButton>
      </Box>
    </Box>
  )
}
export default Sidebar;