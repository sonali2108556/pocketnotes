import { Box, Typography } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./views/layout/MainLayout";
import "./styles/Main.css"
import { AppProvider } from "./context/AppProvider";
import Home from "./views/pages/Home/Home";
import Notes from "./views/pages/Notes/Notes";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/notes/:groupId" element={<Notes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}
export default App;