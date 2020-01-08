import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import logo from "assets/img/custom/logoreal.png";
import Footer from "components/Footer/Footer.js";
// @material-ui/icons

// core components
import Header from "components/AdminHeader/HeaderAdmin.js";
import HeaderLinks from "components/AdminHeader/HeaderAdminLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import TableUsersSection from "./TableUsersSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      {/* <Header
        color='white'
        routes={dashboardRoutes}
        brand='Material Kit React'
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      /> */}
      <Header
        brand={<img src={logo} />}
        fixed
        leftLinks={<span />}
        rightLinks={<HeaderLinks />}
      />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div
          className={classes.container}
          style={{ padding: "50px", marginTop: "200px" }}
        >
          <TableUsersSection style={{ margin: "15px" }} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
