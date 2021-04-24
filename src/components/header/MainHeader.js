import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Avatar, Container } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import "./MainHeader.css";
import { useHistory } from "react-router-dom";
import Drawer from "./Drawer";
// import Flip from "react-reveal/Flip";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
    position: "relative",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: 50,
  },
  title: {
    flexGrow: 1,
  },
  loginBtn: {
    marginRight: 80,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  appBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 0,
    position: "fixed",
    height: "10%",
  },
}));

export default function ButtonAppBar({ draw, setDrawer }) {
  const classes = useStyles();
  const [toggle, setToggle] = React.useState(false);
  let history = useHistory();
  const handleClick = (navig) => {
    history.push(`/${navig}`);
  };

  return (
    <div className={classes.root}>
      {draw && <Drawer handleClick={handleClick} />}
      <AppBar position="fixed" className={classes.appBar} className="appBar">
        <Container>
          <Toolbar>
            <img
              onClick={() => handleClick("")}
              className="logo"
              alt="Remy Sharp"
              /*style={{borderRadius:51 + "%"}}*/
              src={require("../../assets/le-logo.jpeg").default}
            />
            {/* <Container className="menu">
              {!draw ? (
                <MenuIcon
                  onClick={() => setDrawer(!draw)}
                  className="menu-icon"
                />
              ) : (
                <CloseIcon
                  onClick={() => setDrawer(!draw)}
                  className="menu-icon"
                />
              )}
            </Container> */}

            {/* <Container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 100,
              }}
              className="btn-container"
            >
              <Button className="btn" onClick={() => handleClick("")}>
                <h4 className="btn-tittle">Accueil</h4>
              </Button>
              <Button className="btn" onClick={() => handleClick("login")}>
                <h4 className="btn-tittle">Se connecter</h4>
              </Button>

              <Button
                className="btn"
                onClick={() => handleClick("inscription")}
              >
                <h4 className="btn-tittle">Creer un compte</h4>
              </Button>
            </Container> */}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
