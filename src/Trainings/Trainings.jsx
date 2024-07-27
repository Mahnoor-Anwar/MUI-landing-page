import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import Flutter from '../assets/JWP Images/download.jfif'
import Web from '../assets/JWP Images/web.png'
import Graphic from '../assets/JWP Images/graphic.jpg'
import Social from '../assets/JWP Images/social.png'
import Blockchain from '../assets/JWP Images/blockchain.jpg'

const CardComponent = ({ title, description, image }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Training = () => {
  const cards = [
    { title: 'Web And Mobile App Development', description: 'Description for card 1', image: `${Web}` },
    { title: 'Social and Media Marketing', description: 'Description for card 2', image: `${Social}` },
    { title: 'Flutter Development', description: 'Description for card 3', image:`${Flutter}` },
    { title: 'Graphics and Video Editing', description: 'Description for card 3', image:`${Graphic}` },
    { title: 'Blockchain', description: 'Description for card 3', image:`${Blockchain}` },
  ];

  return (<Box mt={5}>
      <Typography variant="h4" color="green" textAlign="center" mt={5} fontWeight="bold">IT Trainings offering in jawan Pakistan</Typography>
    <Grid container spacing={3} justifyContent="center" mx={4} my={5}>
      {cards.map((card, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <CardComponent title={card.title} image={card.image} />
        </Grid>
      ))}
    </Grid>
    </Box>
  );
};

export default Training;
