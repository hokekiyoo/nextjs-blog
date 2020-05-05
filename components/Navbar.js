import React, { useState } from "react";
import Link from 'next/link'
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  AssignmentInd,
  Apps,
  Home,
  ContactMail,
  MenuOpen,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: "12rem",
    background: "#263238",
    height: "150rem",
  },
  avatar: {
    display: "block",
    margin: "1rem auto",
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  listItem: {
    color: "tan",
  },
}));
const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
  { listIcon: <Apps />, listText: "Portfolio", listPath: "/portofolio" },
  { listIcon: <ContactMail />, listText: "Contacts" },
];
const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });
  const toggleSlider = (slider, isOpen) => () => {
    setState({ ...state, [slider]: isOpen });
  };

  const classes = useStyles();
  const sideList = (slider) => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar
        className={classes.avatar}
        src="/images/cat.png"
        alt="monta"
        onClick={toggleSlider(slider, false)}
      />
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <ListItem button key={key} component={Link} to={item.listPath}>
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={item.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#b71c1c" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <MenuOpen style={{ color: "white" }} />
            </IconButton>
            <Typography variant="h5">MENU</Typography>
            <MobileRightMenuSlider
              onClose={toggleSlider("right", false)}
              anchor="left"
              open={state.right}
            >
              {sideList("right")}
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
