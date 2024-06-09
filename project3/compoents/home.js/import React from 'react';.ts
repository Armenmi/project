import React from 'react';
import { Container, Typography } from '@material-ui/core';

const Home = () => {
  return (
    <Container>
      <Typography variant="h2">Welcome to Car Portfolio</Typography>
      <Typography variant="body1">
        Explore our collection of amazing cars.
      </Typography>
    </Container>
  );
};

export default Home;
