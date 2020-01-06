import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { 
  makeStyles,
  } from "@material-ui/core/styles";

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
import Tablerequests from "./Tablerequests.js";



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
      brand={<img src={logo}/>}
      fixed
      leftLinks={<span />}
      rightLinks={<HeaderLinks />}
    />
      <Parallax small filter image={require("assets/img/custom/deskunorgnized.jpg")} >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}></h1>
              
              <br />
             
            </GridItem>
         

          </GridContainer>
        </div>

     
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container} style={{padding:'50px',}}>
      
          <Tablerequests style={{margin:'15px',}}/>
     
          
        </div>
      </div>
      <Footer />
    </div>
      
  );
}
