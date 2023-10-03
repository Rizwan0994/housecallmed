import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Nav() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Welcome to buildSpace
          </Typography>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit">Home</Button>
          </Link>

          <Link to="/create" style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit">Create</Button>
          </Link>


        
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Nav;
