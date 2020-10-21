import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <main>
        <HomeScreen />
      </main>
      <Footer />
    </div>
  );
};

export default App;
