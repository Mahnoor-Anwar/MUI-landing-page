import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import Logo from '../assets/JWP Images/j3.png'
import style from './footer.module.css'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        padding: 3,
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
        mt: 5
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4}>
         <img src={Logo} className={style.logo} />
        </Grid>
        <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" textAlign="center">COMPANY</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link href="#" variant="body2" color="green" underline="none" sx={{ mb: 1 }}>
              Home
            </Link>
            <Link href="#" variant="body2"color="green" underline="none" sx={{ mb: 1 }}>
              About Us
            </Link>
            <Link href="#" variant="body2" color="green" underline="none" sx={{ mb: 1 }}>
              Services
            </Link>
            <Link href="#" variant="body2" color="green" underline="none" sx={{ mb: 1 }}>
              Blog
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
        <Typography variant="h6" fontWeight="bold" textAlign="center">Contact Details </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="body2" color="green" sx={{ mb: 1 }}>
              Muhammad Ali Mughal
            </Typography>
            <Typography variant="body2" color="green" sx={{ mb: 1 }}>
            +923005292675
            </Typography>
            <Typography variant="body2" color="green" sx={{ mb: 1 }}>
            jawantechpk@gmail.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
