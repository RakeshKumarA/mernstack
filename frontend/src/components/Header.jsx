import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography, Grid } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import Spacer from 'react-add-space';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  toolbar: {
    height: '15vh',
  },
  linkdeco: {
    textDecoration: 'none',
    color: '#fff',
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  const onClicktocart = () => {
    history.push('/cart');
  };

  const onClicktologin = () => {
    history.push('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Grid container>
          <Grid item sm={2} />
          <Grid item container xs={12} sm={8}>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" className={classes.linkdeco}>
                PROSHOP
              </Link>
            </Typography>
            <Button color="inherit" onClick={onClicktocart}>
              <ShoppingCartIcon /> <Spacer amount={2} />
              CART
            </Button>
            <Button color="inherit" onClick={onClicktologin}>
              <PersonIcon /> <Spacer amount={2} />
              SIGN IN
            </Button>
          </Grid>
          <Grid item sm={2} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
