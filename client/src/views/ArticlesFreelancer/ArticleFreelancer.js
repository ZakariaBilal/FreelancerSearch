import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { 
  makeStyles,createMuiTheme, MuiThemeProvider 
  } from "@material-ui/core/styles";

import logo from "assets/img/custom/logoreal.png";
import Footer from "components/Footer/Footer.js";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";


// Sections for this page




const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ArticleFreelancer(props) {
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
      <Parallax filter >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Title here</h1>
              
              <br />
             
            </GridItem>
         

          </GridContainer>
        </div>

     
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)} style={{padding:'50px',}}>
        <div className={classes.container}>
        
        <h4 style={{color:'#000'}}>Body here</h4>
        </div>
      </div>
      <Footer />
    </div>
      
  );
}
