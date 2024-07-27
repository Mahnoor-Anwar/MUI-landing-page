import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Box
      component="form"
      sx={{
        width: '100%',
        maxWidth: 500,
        margin: '70px auto',
        padding: 3,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: 2,
        backgroundColor: 'white'
      }}
      marginTop="50px"
    >
      <Typography variant="h5" component="div" sx={{ mb: 2 }}>
        Contact Us
      </Typography>
      <TextField
        fullWidth
        label="Name"
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        margin="normal"
        type="email"
      />
      <TextField
        fullWidth
        label="Phone Number"
        variant="outlined"
        margin="normal"
        type="tel"
      />
      <TextField
        fullWidth
        label="Message"
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
      />
      <Button
        fullWidth
        variant="contained"
        color="success"
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Contact;
