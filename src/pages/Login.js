import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import MainHeader from "../components/header/MainHeader";
import { useGlobalContext } from "../context/context";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Appflux
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(16),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '72%',
    marginTop: 8+'px',
  },
  submit: {
    margin: theme.spacing(2, 6, 2),
    
    background: "#18A4F6",
    color: "white",
    fontSize:20
  },
  circle: {
    alignSelf: "center",
    marginLeft: 120,
  },
}));

export default function Login() {

  const { signIn, load, draw, setDrawer, err } = useGlobalContext();
  const initialState = {
    email: "",
    password: "",
  };
  const [credentital, setCredentital] = React.useState(initialState);

  const classes = useStyles();

  const handleChange = (e) => {
    var { name, value } = e.target;
    setCredentital({
      ...credentital,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = credentital;
    signIn(email, password);
    setCredentital({
      email: "",
      password: "",
    });
  };
  let history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  let errorr, text, textt;
  if (err) {
    errorr = true;
    text = "Revoyez votre email ";
    textt = "Revoyez votre mot de passe";
  }

  return (
    <>
    <MainHeader />
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Se connecter
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            error={errorr}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            value={credentital.email}
            helperText={text}
          />
          <TextField
            variant="outlined"
            error={errorr}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            value={credentital.password}
            helperText={textt}
          />
            {load ? (
              <>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="#616A6B"
                  className={classes.submit}
                  disabled
                >
                  Se connecter
                </Button>
                <CircularProgress className={classes.circle} />
              </>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="#616A6B"
                className={classes.submit}
              >
                Se connecter
              </Button>
            )}
          <Grid container>
            <Grid item style={{marginTop:10, marginLeft:20, alignContent:'center'}}>
              <Link  href="/inscription" variant="body2">
                Vous n'avez pas de compte? S'inscrire
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </>
  );
}
