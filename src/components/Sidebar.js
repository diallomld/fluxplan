import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import "./Sidebar.css";

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import {SidebarData} from './SidebarData';
import { SidebarData2 } from "./sideBarData2";
import { Link, useHistory } from 'react-router-dom';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import styled from "styled-components";


import { useGlobalContext } from "../context/context";

const SidebarLink = styled(Link)`
  display: flex;
  color: #252831;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  list-style: none;
  text-decoration: none;
  font-size: 16px;
  width: 350px;
  &:hover {
    background: #18A4F6;
    color: white;
    border-left: 0.4px solid #632ce4;
    cursor: pointer;
  }
`;
const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Sidebar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [selectedIndex, setSelectedIndex] = React.useState("");

  const [sidebar, setSidebar] = React.useState(false);
  const { userId, setUserId } = useGlobalContext();
  let history = useHistory();
  const handleClick2 = () => {
    //localStorage.setItem("userId", "")
    setUserId("");
    history.push("/");
  };

  const handleClick = (index) => {
    console.log("index " +index)
    if(selectedIndex === index){
      setSelectedIndex("")
    }else{
      setSelectedIndex(index)
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} style={{backgroundColor:"black"}}>
          <img className="img" src={require("../assets/le-logo.jpeg").default} />
          
          <ExitToAppIcon className="logout" onClick={() => handleClick2()} />
      </div>
      <Divider />
          {SidebarData.map((item, index) => {
              return (
                <List key={index}>
                  <ListItem button onClick={() => {handleClick(index)}}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                    {index === selectedIndex ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                    <Collapse in={index === selectedIndex} timeout="auto" unmountOnExit>
                      {item.subNav.map((item,index) => {
                        return (
                          <List key={index} component="div" disablePadding>
                            <ListItem  button className={classes.nested}>
                              <SidebarLink to={item.path}>
                                <ListItemIcon>
                                  {item.icon}
                                </ListItemIcon>
                                <ListItemText to primary={item.title} />
                              </SidebarLink>
                            </ListItem>
                          </List>
                        )
                        }
                      )}
                    </Collapse>
              </List>
              );
          })}
          {SidebarData2.map((item, index) => {
              return (
                <List key={index}>
                  <ListItem button>
                    <SidebarLink to={item.path}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.title} />
                    </SidebarLink>
                  </ListItem>
                </List>
              );
          })}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" style={{backgroundColor:'#14abc3'}} className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            AppFluxPlan
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
      </main>
    </div>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
