import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { getUserDetails } from '../reducers/profileSlice';
import { updateUserDetails } from '../reducers/updateProfileSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '60vh',
  },
  title: {
    marginTop: '5vh',
  },
  linkdeco: {
    textDecoration: 'none',
  },
}));

const ProfileScreen = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const history = useHistory();

  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.profile);
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (!userInfo && Object.keys(userInfo).length === 0) {
      history.pushState('/login');
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [userInfo, dispatch, user, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(updateUserDetails({ id: user.id, name, email, password }));
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid item sm={4} />
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity="error">
          {message}
          {error}
        </Alert>
      ) : (
        <Grid item sm={4} container direction="column" spacing={1}>
          <Grid item>
            <Typography variant="h4" color="initial" className={classes.title}>
              PROFILE
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color="initial">
              Name
            </Typography>
            <TextField
              label="Enter Name"
              variant="filled"
              fullWidth={true}
              size={'small'}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color="initial">
              Email Address
            </Typography>
            <TextField
              label="Enter Email"
              variant="filled"
              fullWidth={true}
              size={'small'}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>

          <Grid item>
            <Typography variant="subtitle1" color="initial">
              Password
            </Typography>
            <TextField
              label="Enter Password"
              variant="filled"
              fullWidth={true}
              size={'small'}
              value={password}
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color="initial">
              Confirm Password
            </Typography>
            <TextField
              label="Confirm Password"
              variant="filled"
              fullWidth={true}
              size={'small'}
              value={confirmPassword}
              type="password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </Grid>
          <Grid item>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                UPDATE
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}

      <Grid item sm={4} />
    </Grid>
  );
};

export default ProfileScreen;
