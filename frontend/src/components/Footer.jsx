import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'grid',
    placeItems: 'center',
    height: '15vh',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return <footer className={classes.footer}>Copyright &copy; ProShop</footer>;
};

export default Footer;
