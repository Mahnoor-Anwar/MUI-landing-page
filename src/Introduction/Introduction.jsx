import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IntroductionImage from '../assets/JWP Images/1.png'
import style from './Intro.module.css'

export default function Introduction() {
  return (
    <Box sx={{ width: '100%' }} mt={5}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
            <Typography variant="h4" sx={{color:'green', fontWeight:'bold', marginLeft:'100px' , marginTop:'100px'}}>Introduction To <br></br>Jawan Pakistan</Typography>
            <Typography variant="body1" sx={{marginLeft:'100px' , marginTop:'50px'}}className="">The foundation of every state is the education and skills set of its youth. Jawan Pakistan is such an organization of Pakistan who is not only working on youth education but also enhancing skills set in youth either Free of cost or in a very low cost. This initiative, initially developed by a single person and with almost no seed capital, promotes entrepreneurship and innovation  and Sustainable Development Goal, which promotes inclusive and sustainable economic growth. </Typography>
        </Grid>
        <Grid item xs={6}>
            <img src={IntroductionImage} className={style.introImage}/>
        </Grid>
      </Grid>
    </Box>
  );
}
