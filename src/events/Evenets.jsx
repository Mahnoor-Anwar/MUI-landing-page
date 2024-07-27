import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import Flutter from '../assets/JWP Images/download.jfif'
import E1 from '../assets/JWP Images/e1.jpg'
import E2 from '../assets/JWP Images/e2.jpg'
import E3 from '../assets/JWP Images/e3.jpg'
import E4 from '../assets/JWP Images/e4.jpg'
import E5 from '../assets/JWP Images/e5.jpg'
import E6 from '../assets/JWP Images/e6.jpg'

const CardComponent = ({ title, description, image, height }) => {
  return (  
    <Card sx={{ height: height }}>
      <CardMedia
        component="img"
        height="100%"
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

const CardRow = () => {
  const cards = [
    { image: `${E5}`, height: 500 },
    {  image: `${E1}`, height: 300 },
    {  image: `${E3}`, height: 500, width:700 },
    {  image: `${E6}`, height: 300 },
    {  image: `${E2}`, height: 300 },
    {  image: `${E4}`, height: 300 },

  ];

  return (
      <Box mt={5}>
        <Typography  variant="h4" color="green" textAlign="center" my={5} fontWeight="bold">    Glimpses of sessions conducted by Jawan Pakistan    </Typography>
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <React.Fragment key={index}>
            {index % 3 === 0 && (
              <Grid item xs={12} sm={12} md={6}>
                <CardComponent title={card.title} description={card.description} image={card.image} height={card.height} />
              </Grid>
            )}
            {index % 3 !== 0 && (
              <Grid item xs={12} sm={6} md={3}>
                <CardComponent title={card.title} description={card.description} image={card.image} height={card.height} />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
    </Box>
  );
};

export default CardRow;
