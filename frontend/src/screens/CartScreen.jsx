import {
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../reducers/cartSlice';

const useStyles = makeStyles({
  card: {
    marginBottom: '10px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  cardMedia: {
    width: '10vh',
  },
  root: {},
  title: {
    margin: '10px 0',
  },
  cardContent: {
    width: '20%',
  },
});

const CartScreen = ({ match, location }) => {
  const classes = useStyles();
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <Grid container>
      <Grid item sm={8} container>
        <Grid item sm={1} />
        <Grid item sm={10} container direction="column">
          <Grid item>
            <Typography variant="h4" color="initial" className={classes.title}>
              Shopping Cart
            </Typography>
          </Grid>
          {cartItems.length === 0 ? (
            <Alert severity="info">Cart is Empty</Alert>
          ) : (
            cartItems.map((cartItem) => (
              <Grid item key={cartItem.id} className={classes.root}>
                <Card className={classes.card}>
                  <div className={classes.cardContent}>
                    <CardMedia
                      component="img"
                      alt={cartItem.name}
                      image={cartItem.image}
                      title={cartItem.name}
                      className={classes.cardMedia}
                    />
                  </div>
                  <CardContent className={classes.cardContent}>
                    <Typography component="h6" variant="body1">
                      {cartItem.name}
                    </Typography>
                  </CardContent>
                  <CardContent className={classes.cardContent}>
                    <Typography component="h6" variant="body1">
                      Qty:
                    </Typography>
                    <FormControl className={classes.formControl}>
                      <Select value={cartItem.qty}>
                        {[...Array(cartItem.countinstock).keys()].map((x) => (
                          <MenuItem value={x + 1}>{x + 1}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </CardContent>
                  <CardContent className={classes.cardContent}>
                    <Typography component="h6" variant="body1">
                      Price: $ {cartItem.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Grid>
      <Grid item sm={4}></Grid>
    </Grid>
  );
};

export default CartScreen;
