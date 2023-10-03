import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import MyButton from '../Buttons/Button';
const Navbar = () => {
  return (
    <AppBar position="static" sx={{background:"white", color:"black"}}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 0 }}>
          {/* <img
            src="/path-to-your-logo-image.png" 
            alt="HouseCall MD Logo"
            style={{ height: '40px', marginRight: '10px' }} 
          /> */}
          HouseCall MD
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button color="inherit">Home</Button>
        <Button color="inherit">About Us</Button>
        <Button color="inherit">Services</Button>
        <Button color="inherit">Patient Resources</Button>
        <Button color="inherit">Contact Us</Button>
        <Button color="inherit">Blog</Button>
        {/* <MyButton text="Make an appointment" color="primary" variant="contained" />
        <MyButton text="Make an appointment" color="primary" variant="contained" /> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
