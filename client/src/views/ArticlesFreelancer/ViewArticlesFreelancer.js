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
import TableArticlesFreelancerSection from "./TableArticlesFreelancerSection.js";
// Sections for this page

const defaultTheme = createMuiTheme()

Object.assign(defaultTheme, {
    overrides: {
        MUIRichTextEditor: {
            root: {
                marginTop: 20,
                width: "80%"
            },
            editor: {
                borderBottom: "1px solid gray" ,
                color : '#000000',
                height : '100%',

            },
            
        }
    }
})


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function NewArticleFreelancer(props) {
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
      <Parallax filter image={require("assets/img/custom/freelancerdesk.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Manage Your own Articles </h1>
              
              <br />
             
            </GridItem>
         

          </GridContainer>
        </div>

     
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)} style={{padding:'50px',}}>
        <div className={classes.container}>
        <TableArticlesFreelancerSection style={{margin:'15px',}}/>
        </div>
      </div>
      <Footer />
    </div>
      
  );
}
