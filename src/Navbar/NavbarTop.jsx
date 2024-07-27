import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import Logo from '../assets/JWP Images/j3.png'
import style from './navbar.module.css'
import Divider from '@mui/material/Divider';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const NavbarTop = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' , paddingLeft:'40px',  boxShadow:'none', mt:'20px'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ mr: 2 }}>
          <img src={Logo} className={style.logo}/>
        </Typography><hr></hr>
        <Divider orientation="vertical" flexItem sx={{ mr: 2 , color:'black', background:'black'}} />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit" onClick={handleMenu}>
            Training
            <KeyboardArrowDownOutlinedIcon />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Web and Mobbile App Development</MenuItem>
            <MenuItem onClick={handleClose}>Flutter Development</MenuItem>
            <MenuItem onClick={handleClose}>Graphics and Video Editing</MenuItem>
            <MenuItem onClick={handleClose}>Social and Media Marketing</MenuItem>
            <MenuItem onClick={handleClose}>Blockchain</MenuItem>
          </Menu>
          <Button color="inherit">Contact Us</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarTop;
