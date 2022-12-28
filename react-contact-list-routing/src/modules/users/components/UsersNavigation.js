import { Paper, Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';

function UsersNavigation() {
  return (
    <Paper>
      <Button to="" component={NavLink} startIcon={<FormatListNumberedOutlinedIcon/>}>
        List
      </Button>
      <Button to="new" component={NavLink} startIcon={<ControlPointOutlinedIcon/>}>
        Add
      </Button>
    </Paper>
  )
}

export default UsersNavigation