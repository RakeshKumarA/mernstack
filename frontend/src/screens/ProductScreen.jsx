import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Card, CardMedia, Divider, Grid, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles({
  goback: {
    margin: '20px',
  },
  pname: {
    padding: '20px',
  },
  midsection: {
    padding: '10px 20px',
  },
  image: {
    padding: '20px',
  },
  pricenstock: {
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-around',
  },
  addtocart: {
    padding: '20px',
  },
  carttext: {
    padding: '0 10px',
  },
});

const ProductScreen = ({ match }) => {
  const classes = useStyles();
  const history = useHistory();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [match]);

  const instock =
    Number(product.countinstock) > 0 ? 'In Stock' : 'Not In Stock';

  const onClickGoHome = () => {
    history.push('/');
  };

  return (
    <Grid container>
      <Grid item sm={2} />
      <Grid item container xs={12} sm={8} direction="column">
        <Grid item className={classes.goback}>
          <Button variant="text" color="default" onClick={onClickGoHome}>
            Go Back
          </Button>
        </Grid>
        <Grid item container>
          <Grid item xs={6} className={classes.image}>
            <Card>
              <CardMedia
                component="img"
                alt={product.name}
                image={product.image}
                title={product.name}
              />
            </Card>
          </Grid>
          <Grid item xs={3} container direction="column">
            <Grid item className={classes.pname}>
              <Typography variant="h6" color="initial">
                {product.name}
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item className={classes.midsection}>
              <Rating
                readOnly
                size="large"
                value={Number(product.rating) || 0}
                precision={0.5}
              />
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item className={classes.midsection}>
              <Typography variant="h6" color="initial">
                Price: $ {product.price}
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                color="initial"
                className={classes.midsection}
              >
                {product.description}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={3} className={classes.addtocart}>
            <Card className={classes.pricenstock} square>
              <Typography variant="body1" color="initial">
                Price:
              </Typography>
              <Typography variant="body1" color="initial">
                $ {product.price}
              </Typography>
            </Card>
            <Card className={classes.pricenstock} square>
              <Typography variant="body1" color="initial">
                Status:
              </Typography>
              <Typography variant="body1" color="initial">
                {instock}
              </Typography>
            </Card>
            <Card className={classes.pricenstock} square>
              {Number(product.countinstock) > 0 ? (
                <Button variant="contained" color="primary">
                  <Typography
                    variant="body2"
                    color="initial"
                    className={classes.carttext}
                  >
                    Add to Cart
                  </Typography>
                </Button>
              ) : (
                <Button variant="contained" color="primary" disabled>
                  <Typography
                    variant="body2"
                    color="initial"
                    className={classes.carttext}
                  >
                    Add to Cart
                  </Typography>
                </Button>
              )}
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={2} />
    </Grid>
  );
};

export default ProductScreen;
