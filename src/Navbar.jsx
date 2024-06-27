import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import react from 'react';
import isrologo from '../src/images/isro-badge-sticker-india-438x438.jpg'
import  logo from '../src//images//sataymeva jayete.jpeg'
import SearchAppBar1 from './Searchbar1';
const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
    height:"70px"
})

const Navbar=()=>{
    return(
        <>
        <AppBar position='sticky'>
            <StyledToolbar>
            <img  src={isrologo} style={{height:"45px"} }></img>
            <div>
            <Typography variant="h8">भारतीय अंतरिक्ष अनुसंधान संगठन </Typography>
            <Typography variant="h5">Indian space Reasearch Organization</Typography>
            </div>
            <img  src={logo} style={{height:"45px"} }></img>
            </StyledToolbar>
            <SearchAppBar1/>
        </AppBar>
        </>
    )
}
export default Navbar;