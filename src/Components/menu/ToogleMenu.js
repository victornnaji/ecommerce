import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import {Link } from "react-router-dom";
import "./Tooglemenu.scss";

const useStyles = makeStyles({
    list: {
      width: 250,
      textTransform: "uppercase",
      marginTop :"5rem",
    }
  });
  
  export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      right: false
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [side]: open });
      };

      const sideList = side => (
        <>
        <div className="closemenu">
            <CloseIcon onClick={toggleDrawer('right', false)}/>
        </div>
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
          <List>
             <ListItem button key="0">
                    <Link to ="/" className="menu-item">Home</Link>
              </ListItem>
              <ListItem button key="1">
                    <Link to ="/men" className="menu-item">Men</Link>
              </ListItem>
              <ListItem button key="2">
                    <Link to ="/women" className="menu-item">Women</Link>
              </ListItem>
              <ListItem button key="3">
                    <Link to ="/kids" className="menu-item">Kids</Link>
              </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key="1">
                <ListItemIcon><SearchOutlinedIcon /></ListItemIcon>
                <ListItemText primary="Search"/>
            </ListItem>

            <ListItem button key="2">
                <ListItemIcon><ShoppingCartOutlinedIcon /></ListItemIcon>
                <ListItemText primary="Cart"/>
            </ListItem>

            <ListItem button key="3">
                <ListItemText primary="Sign In"/>
            </ListItem>
          </List>
        </div>
        </>
      );
    

      return (
        <div>
            <IconButton edge="start" color="inherit" aria-label="menu">
                 <MenuIcon onClick={toggleDrawer('right', true)}/>
            </IconButton>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                {sideList('right')}
            </Drawer>
        </div>
      );
    };