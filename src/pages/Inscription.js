import React, { useState } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";
import MainHeader from "../components/header/MainHeader";
import { useGlobalContext } from "../context/context";
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
    marginBottom: 10,
    marginTop: 100,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "40vw",
    justifyContent: "center",
    alignItems: "center",

    padding: 30,
  },
  submit: {
    width: 150,
    height: 40,
    marginTop: 15,
    background: "#18A4F6",
    color: "white",
    fontSize: 20,
  },
  circle: {
    alignSelf: "center",
    marginLeft: 100,
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
  let errorr, text, textt;
  if (err) {
    errorr = true;
    text = "L'email existe  déja";
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
        <h4 className={classes.hh}>
          {/* creer un compte pour pouvoir utiliser le logiciel */}
        </h4>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nom"
            label="nom"
            name="nom"
            autoComplete="nom"
            autoFocus
            onChange={handleChange}
            value={credentital.nom}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="prenom"
            label="prenom"
            name="prenom"
            autoComplete="prenom"
            autoFocus
            onChange={handleChange}
            value={credentital.prenom}
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
            autoFocus
            onChange={handleChange}
            value={credentital.email}
            helperText={text}
          />
          <TextField
            variant="outlined"
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
            >
              S'enregistrer
            </Button>
          )}
        </form>
        <Link to="/" style={{fontSize : 20+"px"}}>{"Vous avez deja un compte? Se connecter"}</Link>
      </div>
    </div>
  );
};

export default Inscription;
