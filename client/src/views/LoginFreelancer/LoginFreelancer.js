import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import clsx from 'clsx';
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import logo from "assets/img/custom/logoreal.png";
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import Grid from '@material-ui/core/Grid';
import image from "assets/img/custom/desk.png";

const useStyles = makeStyles(styles);



  

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;


  const [values, setValues] = React.useState({
    
    password: '',
    email: '',
    
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <div>
      <Header
      brand={<img src={logo}/>}
      fixed
      leftLinks={<span />}
      rightLinks={<HeaderLinks />}
    />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                    
                  </CardHeader>
                  
                  <CardBody>
                
                    
<FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" style={{margin:'5px',width:'100%',}}>
<InputLabel htmlFor="outlined-adornment-password">Email*</InputLabel>
          <OutlinedInput
          required
            id="outlined-adornment-email"
            value={values.email}
            onChange={handleChange('email')}
            endAdornment={<InputAdornment position="end">
            <Email className={classes.inputIconsColor} />
          </InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            labelWidth={70}
          />
         
        </FormControl>
<FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" style={{margin:'5px',width:'100%',}}>
          <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>
          <OutlinedInput
          
          required
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                  <Button
                color='success'
                size='lg'
                target='_blank'
                rel='noopener noreferrer'
                type='submit'
              >
                <i className='fas fa-power-off' />
                Login

              </Button>
     
                  </CardFooter>
                </form>
                <Grid item xs={6}>
                <Button variant="contained" color="transparent" href="">
  You don't have an account ? Register!
</Button>
        </Grid>
        <Grid item xs={6}>
        <Button variant="contained" color="transparent" href="">
  Are you a Client ?
</Button>
        </Grid>
                
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
