import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deletefromCart } from '../reducers/cartSlice';
import DeleteIcon from '@material-ui/icons/Delete';
import Spacer from 'react-add-space';

const useStyles = makeStyles({
  card: {
    marginBottom: '10px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  cardMedia: {
    width: '10vh',
  },
  title: {
    margin: '10px 0',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
  },
  subtotalSection: {
    marginTop: '20px',
  },
  checkoutButton: {
    width: '80%',
  },
  checkoutCard: {
    width: '60%',
    padding: '5px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

  const removeItemFromCart = (cartItem) => {
    dispatch(deletefromCart(cartItem));
  };

  return (
    <Grid container>
      <Grid item sm={8} container>
        <Grid item xs={1} sm={1} />
        <Grid item xs={6} sm={10} container direction="column">
          <Grid item>
            <Typography variant="h4" color="initial" className={classes.title}>
              Shopping Cart
            </Typography>
          </Grid>
          {cartItems.length === 0 ? (
            <Alert severity="info">Cart is Empty</Alert>
          ) : (
            cartItems.map((cartItem) => (
              <Grid item key={cartItem.product}>
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
                    <Typography component="h6" variant="body2">
                      {cartItem.name}
                    </Typography>
                  </CardContent>
                  <CardContent className={classes.cardContent}>
                    <Typography component="h6" variant="body1">
                      Qty:
                    </Typography>
                    <Spacer amount={2} />
                    <Select
                      value={cartItem.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(cartItem.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(cartItem.countinstock).keys()].map((x) => (
                        <MenuItem value={x + 1} key={cartItem.product}>
                          {x + 1}
                        </MenuItem>
                      ))}
                    </Select>
                  </CardContent>
                  <CardContent className={classes.cardContent}>
                    <Typography component="h6" variant="body1">
                      Price: $ {cartItem.price}
                    </Typography>
                  </CardContent>
                  <CardContent className={classes.cardContent}>
                    <IconButton onClick={() => removeItemFromCart(cartItem)}>
                      <DeleteIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
        <Grid item xs={10} sm={1} />
      </Grid>
      {cartItems && cartItems.length > 0 && (
        <Grid
          item
          sm={4}
          container
          direction="column"
          className={classes.subtotalSection}
        >
          <Grid item>
            <Card square className={classes.checkoutCard}>
              <CardContent>
                <Typography variant="body1" color="initial">
                  SUBTOTAL (
                  {cartItems
                    .map((item) => item.qty)
                    .reduce((prev, curr) => prev + curr, 0)}
                  ) items
                </Typography>
                <Typography variant="body1" color="initial">
                  $
                  {cartItems
                    .map((item) => Number(item.price) * item.qty)
                    .reduce((prev, curr) => prev + curr, 0)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card square className={classes.checkoutCard}>
              <Button
                variant="contained"
                color="primary"
                className={classes.checkoutButton}
              >
                CHECKOUT
              </Button>
            </Card>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default CartScreen;
