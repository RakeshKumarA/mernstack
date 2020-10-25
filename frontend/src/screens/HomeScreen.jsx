import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Product from '../components/Product';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '10px',
  },
}));

const HomeScreen = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Grid container>
      <Grid item sm={2} />
      <Grid item container xs={12} sm={8} direction="column">
        <Grid item>
          <Typography variant="h4" className={classes.title}>
            LATEST PRODUCTS
          </Typography>
        </Grid>
        <Grid item container justify="space-around" alignItems="center">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </Grid>
      </Grid>
      <Grid item sm={2} />
    </Grid>
  );
};

export default HomeScreen;
