import React, { useEffect } from 'react';
import { CircularProgress, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Product from '../components/Product';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../reducers/productSlice';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '10px',
  },
  cirprogress: {
    display: 'grid',
    placeItems: 'center',
    height: '80px',
  },
}));

const HomeScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Grid container>
      <Grid item sm={2} />
      <Grid item container xs={12} sm={8} direction="column">
        <Grid item>
          <Typography variant="h4" className={classes.title}>
            LATEST PRODUCTS
          </Typography>
        </Grid>
        {loading ? (
          <div className={classes.cirprogress}>
            <CircularProgress />
          </div>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <Grid item container justify="space-around" alignItems="center">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </Grid>
        )}
      </Grid>
      <Grid item sm={2} />
    </Grid>
  );
};

export default HomeScreen;
