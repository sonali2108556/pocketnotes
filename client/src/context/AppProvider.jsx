import axios from "axios";
import React, { useEffect, useState } from "react";

const AppContext = React.createContext();

const api_url = "https://pocketnotes-dt12.onrender.com/api";

const AppProvider = ({ children }) => {
  const [noteGoups, setNoteGroups] = useState([]);
  const [notesByGroup, setNotesByGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const getGroupsList = async () => {
    setLoading(true);
    try {
      const response = await axios.get(api_url + "/groups");
      setNoteGroups(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  const getNotesByGroupId = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(api_url + "/notes/" + id);
      setNotesByGroup(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  const createNewNote = async (id, data) => {
    setLoading(true);
    try {
      const postData = {
        groupId: id,
        note: data
      }
      const response = await axios.post(api_url + "/notes", postData);
      getNotesByGroupId(response.data.groupId);

    } catch (error) {
      console.log(error)
    }
    setLoading(false);
  }
  const createNewGroup = async (data) => {
    setLoading(true)

    try {
      await axios.post(api_url + "/groups", data);
      getGroupsList();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  const deleteGroup = async (id) => {
    setLoading(true)

    try {
      await axios.delete(api_url + "/groups/" + id);
      getGroupsList();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);

  }
  const deleteNoteById=async(id)=>{
    setLoading(true);
    try {
      await axios.delete(api_url + "/notes/delete/"+id);
      getNotesByGroupId(notesByGroup.group._id);

    } catch (error) {
      console.log(error)
    }
    setLoading(false);

  }
  useEffect(() => {
    getGroupsList()
  }, [])
  return (
    <AppContext.Provider value={{
      loading,
      noteGoups,
      notesByGroup,
      getGroupsList,
      getNotesByGroupId,
      createNewNote,
      createNewGroup,
      deleteGroup,
      deleteNoteById
    }}>
      {children}
    </AppContext.Provider>
  )
}
export { AppProvider, AppContext };