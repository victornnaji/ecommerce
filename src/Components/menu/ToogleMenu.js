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
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import {Link } from "react-router-dom";
import "./Tooglemenu.scss";
import {auth} from "../../firebase/firebase.util";


const useStyles = makeStyles({
    list: {
      width: 250,
      textTransform: "uppercase",
      marginTop :"5rem",
    }
  });
  
 function TemporaryDrawer({user}) {
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
                    <Link to ="/shop/mens" className="menu-item">Men</Link>
              </ListItem>
              <ListItem button key="2">
                    <Link to ="/shop/womens" className="menu-item">Women</Link>
              </ListItem>
              <ListItem button key="3">
                    <Link to ="/shop/kids" className="menu-item">Kids</Link>
              </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key="1">
                <ListItemIcon><SearchOutlinedIcon /></ListItemIcon>
                <ListItemText primary="Search"/>
            </ListItem>


            <ListItem button key="2">
                {user ? <> <div onClick={() => auth.signOut()}>
                <div className="signing-holder">
                  <img src={require("../../assets/user.png")} alt="" className="signin_image"/>
                  <ListItemText primary="Sign Out"/></div> 
                </div>
                  </> :
                <Link to ="/signin" className="menu-item"><ListItemText primary="Sign in"/></Link>
                }
            </ListItem>
          </List>
        </div>
        </>
      );
    

      return (
        <div>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer('right', true)}>
                 <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                {sideList('right')}
            </Drawer>
        </div>
      );
    };

export default TemporaryDrawer;