import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import products from '../products';
import Product from '../components/Product';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '10px',
  },
}));

const HomeScreen = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item sm={2} />
      <Grid item container xs={12} sm={8} direction='column'>
        <Grid item>
          <Typography variant='h4' className={classes.title}>
            LATEST PRODUCTS
          </Typography>
        </Grid>
        <Grid item container justify='flex-start' alignItems='center'>
          {products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </Grid>
      </Grid>
      <Grid item sm={2} />
    </Grid>
  );
};

export default HomeScreen;
