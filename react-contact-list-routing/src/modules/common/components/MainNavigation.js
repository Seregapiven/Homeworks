import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';

function MainNavigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button variant='h5' sx={{ flexGrow: 1 }} to='/' component={NavLink} startIcon={<ContactMailOutlinedIcon/>} >
          Contact List
        </Button>
        <Button color='inherit' to='users' component={NavLink} startIcon={<AccountCircleOutlinedIcon/>}>Users</Button>
      </Toolbar>
          </AppBar>

  )
}

export default MainNavigation