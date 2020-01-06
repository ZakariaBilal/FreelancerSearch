import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import profile from "assets/img/faces/upload.png";
import Grid from '@material-ui/core/Grid';
import logo from "assets/img/custom/logoreal.png";
import ProfileditSection from "./ProfileditSection.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePageFreelancer(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const [value, setValue] = React.useState('Controlled');

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Header
      brand={<img src={logo}/>}
      fixed
      leftLinks={<span />}
      rightLinks={<HeaderLinks />}
    />
      <Parallax small filter image={require("assets/img/custom/deskunorgnized.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
        
          <div className={classes.container} style={{padding:'20px'}}>
            <Grid container justify="center">
              <Grid item xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                  <input
  accept="image/*"
  className={classes.input}
  style={{ display: 'none' }}
  id="raised-button-file"
  multiple
  type="file"
  required
/>
<label htmlFor="raised-button-file">
  <Button variant="raised" component="span" className={classes.button}>
    Upload
  </Button>
</label> 
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Gigi Hadid</h3>
          
                   
                  </div>
                </div>
              </Grid>
          
            </Grid>
         
          <ProfileditSection />
    
            
          </div>
         
        </div>
      </div>
      <Footer />
    </div>
  );
}
