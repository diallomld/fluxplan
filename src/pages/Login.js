import React from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import CircularProgress from "@material-ui/core/CircularProgress";

import MainHeader from "../components/header/MainHeader";
import { useGlobalContext } from "../context/context";
const useStyles = makeStyles((theme) => ({
  conatain: {
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
    marginBottom: 200,
    marginTop: 150,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "20%",
    height: "40vh",
    justifyContent: "center",
    alignItems: "center",

    padding: 10,
  },
  submit: {
    height: 40,
    width: 250,
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
    color: "white",
    fontSize: 18,
  },
}));
const Login = ({ navigation }) => {
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
      <div className={classes.contain}>
        {/* <div className={classes.header}>
          <div onClick={handleClick} className={classes.acc}>
            <ArrowBackIcon className={classes.icon} />
            <h1 className={classes.h}>Acceuil</h1>
          </div>
        </div> */}

        <div className={classes.formContainer}>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              error={errorr}
              variant="outlined"
              margin="normal"
              required
              //   fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
              value={credentital.email}
              helperText={text}
              style={{ width: 200, borderRadius: 20 + 'px' }}
            />
            <TextField
              error={errorr}
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
              helperText={textt}
              style={{ width: 200 }}
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
          </form>
          <Link to="/inscription">
            {"Vous n'avez pas de compte? S'enregistrer"}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
