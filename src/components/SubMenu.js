import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    background: #252831;
    border-left: 0.4px solid #632ce4;
    cursor: pointer;
  }
`;
const SidebarLabel = styled.span`
  margin-left: 16px;
`;
const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #18A4F6;
  }
`;
const ContainSubmenu = styled.div`
  /* overflow: scroll; */
`;
const SubMenu = ({ item, setSidebar }) => {
  const [subnav, setSubnav] = React.useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <ContainSubmenu>
        <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
          <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </SidebarLink>

        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <DropdownLink
                to={item.path}
                key={index}
                onClick={() => setSidebar(false)}
              >
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
              </DropdownLink>
            );
          })}
      </ContainSubmenu>
    </>
  );
};

export default SubMenu;
