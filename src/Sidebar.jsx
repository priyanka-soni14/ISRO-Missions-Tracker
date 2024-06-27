import { AccountBox, Description, Group, Home, ModeNight, People, Settings, Storefront } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import react from 'react';

const Sidebar=({mode,setMode})=>{
    
    return (
        <>
        <Box 
       
         flex={1} p={2}
         sx={{display:{xs:"none",sm:"block"}}}>
         <Box  position="fixed">
         <List>
         <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
              <Home/>
              </ListItemIcon>
              <ListItemText primary="HomePage " />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
              <Description/>
              </ListItemIcon>
              <ListItemText primary="About " />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
              <Group/>
              </ListItemIcon>
              <ListItemText primary="Activites " />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
              <Storefront/>
              </ListItemIcon>
              <ListItemText primary="Programes " />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
              <People/>
              </ListItemIcon>
              <ListItemText primary="Resources" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
              <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
              <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="AccountBox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
              <ModeNight/>
              </ListItemIcon>
             <Switch onChange={()=>setMode(mode==="light"?"dark": "light")}/>
            </ListItemButton>
          </ListItem>
          
         </List>
         </Box>
         
        </Box>
        </>
    )
}
export default Sidebar;