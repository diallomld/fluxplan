import React from "react";
import Sidebar from "../../components/Sidebar";
import "./Drawer.css";
import Projection from "./Projection";
const Drawer = () => {
  return (
    <div className="drawer">
      <div className="drawer-sidebar">
        <Sidebar />
      </div>
      <div className="drawer-main">
        <Projection />
      </div>
    </div>
  );
};

export default Drawer;
