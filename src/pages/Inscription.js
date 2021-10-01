import React, { useState } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";


import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import SendIcon from '@material-ui/icons/Send';

import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";
import MainHeader from "../components/header/MainHeader";
import { useGlobalContext } from "../context/context";
import './inscription.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'© '}
      <Link color="inherit" href="/">
        Flux Plan
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'} Tous droit réservés | Design et Développement par <a href="amanou.tech" target="blank">Amanou Tech</a>.
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  conatin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    width: "100vw",
    height: "70px",
    backgroundColor: "#212F3C",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 5,
    marginTop: 110,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "40vw",
    justifyContent: "center",
    alignItems: "center",

    padding: 10,
  },
  submit: {
    width: 150,
    height: 40,
    marginTop: 15,
    background: "#18A4F6",
    color: "white",
    fontSize: 15,
  },
  circle: {
    alignSelf: "center",
  },
  acc: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    color: "white",
  },
  h: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    transition: 1,
    "&:hover": {
      fontSize: 20,
      fontWeight: "bold",
      cursor: "pointer",
      opacity: 1,
    },
  },
  hh: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
  },
  avatar: {
    margin: theme.spacing(2,0,0),
    marginLeft: 10 + 'px' + '!important',
    backgroundColor: theme.palette.secondary.main,
  },
}));
const Inscription = () => {
  const initialState = {
    nom: "",
    prenom: "",
    email: "",
    password: "",
  };
  const { load, signUp, draw, setDrawer, err } = useGlobalContext();
  const [credentital, setCredentital] = useState(initialState);

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
    const { nom, prenom, email, password } = credentital;
    signUp(nom, prenom, email, password);

    setCredentital({
      nom: "",
      prenom: "",
      email: "",
      password: "",
    });
  };
  let history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  let errorr, text, textn, textp, textpp;
  if (err) {
    errorr = true;
    text = "L'email existe  déja";
    textn ="Renvoyer le nom";
    textp ="Renvoyer le prenom";
    textpp ="Renvoyer le mot de passe";
  }
  return (
    <div className={classes.contain}>
      {/* <div className={classes.header}>
        <div onClick={handleClick} className={classes.acc}>
          <ArrowBackIcon className={classes.icon} />
          <h1 className={classes.h}>Acceuil</h1>
        </div>
      </div> */}
      <MainHeader />
      <div className={classes.formContainer}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          S'inscrire
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            error={errorr}
            required
            fullWidth
            id="nom"
            label="nom"
            name="nom"
            autoComplete="nom"
            autoFocus
            onChange={handleChange}
            value={credentital.nom}
            helperText = {textn}
          />
          <TextField
            error={errorr}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="prenom"
            label="prenom"
            name="prenom"
            autoComplete="prenom"
            onChange={handleChange}
            value={credentital.prenom}
            helperText = {textp}
          />
          <TextField
            error={errorr}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="email"
            name="email"
            autoComplete="email"
            onChange={handleChange}
            value={credentital.email}
            helperText={text}
          />
          <TextField
            variant="outlined"
            margin="normal"
            error={errorr}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            value={credentital.password}
            helperText = {textpp}
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
                S'enregistrer
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
              endIcon={<SendIcon />}
            >
              S'enregistrer
            </Button>
          )}
        </form>
        <p className="lien"><Link to="/" style={{fontSize : 20+"px"}}>{"Vous avez deja un compte? Se connecter"}</Link></p>
      </div>
      <Box mt={2}>
        <Copyright />
      </Box>
    </div>
  );
};

export default Inscription;
