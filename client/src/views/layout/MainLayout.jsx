import { Box, LinearProgress } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { AppContext } from "../../context/AppProvider";

function MainLayout() {
    const { loading } = useContext(AppContext);
    const { groupId } = useParams();

    const handleSideBar = () => {
        if (groupId) {
            return ['close', 'open']
        }
        return ['', ''];
    }
    useEffect(() => {
        handleSideBar();
    }, [groupId]);

    return (
        <>
            <Box sx={{ width: '100%', display: loading ? 'block' : 'none', position:'absolute', top:0, left:0 }}>
                <LinearProgress sx={{height:'5px'}} />
            </Box>
            <Box className="app-container">
                <Box className={`sidebar-container ${handleSideBar()[0]}`}>
                    <Sidebar />
                </Box>
                <Box className={`main-content-container ${handleSideBar()[1]}`}>
                    <Outlet />
                </Box>
            </Box>
        </>

    )
}
export default MainLayout;