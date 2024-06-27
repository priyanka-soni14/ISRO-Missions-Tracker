import react, { useState } from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import Feed from './Feed';


const Missiondetails=()=>{
    const [mode,setMode]=useState("light")
  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  })
    return  (
        <>
        <ThemeProvider theme={darkTheme}>
        <Box sx={{height:"100vh"}} bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed />
       </Box>  
        </ThemeProvider>
           

        </>
    )
}
export default Missiondetails;