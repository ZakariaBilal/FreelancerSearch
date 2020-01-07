/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';




// @material-ui/icons

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderAfterLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
     <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          className={classes.navLink}
        >
          <HomeIcon className={classes.icons} /> Home
        </Button>
      </ListItem>
     <ListItem className={classes.listItem}>
        <Button
          href="/login"
          color="transparent"
          className={classes.navLink}
        >
          <AccountCircleIcon className={classes.icons} /> Logout
        </Button>
      </ListItem>
       

     
   
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          className={classes.navLink}
        >
          <InfoIcon className={classes.icons} /> About
        </Button>
      </ListItem>
    </List>
  );
}
