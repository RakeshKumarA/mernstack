import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography, Grid } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Spacer from 'react-add-space';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { user_logout } from '../reducers/userSlice';

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
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onClicktocart = () => {
    history.push('/cart');
  };

  const onClicktologin = () => {
    history.push('/login');
  };

  const logoutHandler = () => {
    dispatch(user_logout());
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
            {userInfo && Object.keys(userInfo).length !== 0 ? (
              <React.Fragment>
                <Button color="inherit">
                  <Link to="/profile" className={classes.linkdeco}>
                    {userInfo.name}
                  </Link>
                </Button>
                <Button color="inherit" onClick={logoutHandler}>
                  <ExitToAppIcon /> <Spacer amount={2} />
                  LOG OUT
                </Button>
              </React.Fragment>
            ) : (
              <Button color="inherit" onClick={onClicktologin}>
                <PersonIcon /> <Spacer amount={2} />
                SIGN IN
              </Button>
            )}
          </Grid>
          <Grid item sm={2} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
