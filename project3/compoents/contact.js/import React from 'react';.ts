import React from 'react';
import { Container, Typography, TextField, Button } from '@material-ui/core';

const Contact = () => {
  return (
    <Container>
      <Typography variant="h4">Contact Us</Typography>
      <form>
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Message" fullWidth multiline rows={4} margin="normal" />
        <Button variant="contained" color="primary" type="submit">Send</Button>
      </form>
    </Container>
  );
};

export default Contact;
