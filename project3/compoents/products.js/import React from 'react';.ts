import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@material-ui/core';

const products = [
  { id: 1, name: 'Car 1', description: 'This is Car 1', image: 'car1.jpg' },
  { id: 2, name: 'Car 2', description: 'This is Car 2', image: 'car2.jpg' },
  { id: 3, name: 'Car 3', description: 'This is Car 3', image: 'car3.jpg' }
];

const Products = () => {
  return (
    <Container>
      <Typography variant="h4">Our Cars</Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image={product.image}
                title={product.name}
              />
              <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="body1">{product.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
