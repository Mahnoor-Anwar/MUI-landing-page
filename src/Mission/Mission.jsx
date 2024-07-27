import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MissionImage from '../assets/JWP Images/2.png'
import style from './Intro.module.css'

export default function Mission() {
  return (
    <Box sx={{ width: '100%' }} mt={5}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
            <img src={MissionImage} className={style.introImage}/>
        </Grid>
        <Grid item xs={6}>
            <Typography variant="h4" sx={{color:'green', fontWeight:'bold', marginLeft:'100px' , marginTop:'100px'}}>Mission and Vision <br></br>Behind Jawan Pakistan</Typography>
            <Typography variant="body1" sx={{marginLeft:'100px' , marginTop:'50px'}}className="">Our vision is to bring our students into the 21st century through innovation and modern technology.
                To create a better every day life for every people. This program is not only impacting the youth in monetary perspective but it is also creating some  deep-rooted, long-term psychological effects
                e.g. minimizing frustration among the unemployed youth.
                 </Typography>
              <Typography variant="body1" sx={{marginLeft:'100px' , marginTop:'50px'}}className="">Our mission is to provide high quality education 
                    that connects young people with opportunities to
                    transform their lives. The educated youngsters who  remain unemployed gets frustrated, depressed 
                    and disheartened when they do not succeed in getting their dream jobs. This training reinforces the educated youth to earn well through freelancing, develop variety of skills through specified domains and promote entrepreneurial culture that diverts youths potentials for constructive purposes. This energy diversion definitely make the youth more confident, self-reliant and constructive asset for a progressing economy.
                    "
                    
              </Typography>     
        </Grid>
        
      </Grid>
    </Box>
  );
}
