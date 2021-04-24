import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./Sidebar.css";
import { IconContext } from "react-icons/lib";
import { useGlobalContext } from "../context/context";
const ContainDiv = styled.div``;
const Nav = styled.div`
  background: #15171c;
  height: 60px;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
`;
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SideBarNav = styled.nav`
  background: #15171c;
  width: 350px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-200%")};
  transition: 350ms;
  z-index: 10;
  margin-top: 60px;
  overflow: scroll;
`;
const SideBarWrap = styled.div`
  width: 100%;
`;
const Title = styled.h3`
  color: white;
  margin-left: 2rem;
  font-size: 18px;
  margin-top: 5px;
`;
const WrapTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Sidebar = ({ navigation }) => {
  const [sidebar, setSidebar] = React.useState(false);
  const { userId, setUserId } = useGlobalContext();
  console.log(navigation);
  console.log("navigation");
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  let history = useHistory();
  const handleClick = () => {
    //localStorage.setItem("userId", "")
    setUserId("");
    history.push("/");
  };
  return (
    <ContainDiv>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav className="nav">
            <img style={{ width: 270+'px' }} src={require("../assets/le-logo.jpeg").default} />
          
            
            <ExitToAppIcon className="logout" onClick={() => handleClick()} />
          
          <NavIcon to="#" className="menu">
            {sidebar ? (
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            ) : (
              <FaIcons.FaBars onClick={showSidebar} />
            )}
          </NavIcon>
        </Nav>
        <SideBarNav sidebar={sidebar} className="wrap">
          <SideBarWrap>
            {/* <NavIcon to="#" className="close">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon> */}
            {SidebarData.map((item, index) => {
              return (
                <SubMenu item={item} key={index} setSidebar={setSidebar} />
              );
            })}
          </SideBarWrap>
        </SideBarNav>
      </IconContext.Provider>
    </ContainDiv>
  );
};

export default Sidebar;
