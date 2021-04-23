import React from "react";
import { useGlobalContext } from "../../context/context";
import "./Drawer.css";
const Drawer = ({ handleClick }) => {
  const { draw, setDrawer } = useGlobalContext();
  const navigation = (nav) => {
    handleClick(nav);
    setDrawer(!draw);
  };
  return (
    <div className="drawer">
      <div className="drawer-div" onClick={() => navigation("")}>
        <h4>Accueil</h4>
      </div>
      <div className="drawer-div" onClick={() => navigation("login")}>
        <h4>Se connecter</h4>
      </div>
      <div className="drawer-div" onClick={() => navigation("inscription")}>
        <h4>S'inscrire</h4>
      </div>
    </div>
  );
};

export default Drawer;
