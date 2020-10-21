import React from 'react';
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
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Grid container>
          <Grid item sm={2} />
          <Grid item container xs={12} sm={8}>
            <Typography variant='h6' className={classes.title}>
              PROSHOP
            </Typography>
            <Button color='inherit'>
              <ShoppingCartIcon /> <Spacer amount={2} />
              CART
            </Button>
            <Button color='inherit'>
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
