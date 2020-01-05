import React from "react";
// @material-ui/core components
import { fade,
  withStyles,
  makeStyles,
 } from "@material-ui/core/styles";
  import InputBase from '@material-ui/core/InputBase';
// @material-ui/icons

import Button from "components/CustomButtons/Button.js";
import RadioGroup from '@material-ui/core/RadioGroup';
import GooglePlaceAutocomplete from 'material-ui-autocomplete-google-places';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
// core components
import IconButton from '@material-ui/core/IconButton';
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import clsx from 'clsx';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(styles);
const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 80,
    position: 'relative',
    backgroundColor: '#c2cbd6',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);
const radioStyles = makeStyles({
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      borderRadius: '50%',
      width: 16,
      height: 16,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: '#f5f8fa',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
      },
      'input:hover ~ &': {
        backgroundColor: '#ebf1f5',
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
    },
    checkedIcon: {
      backgroundColor: '#137cbd',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#106ba3',
      },
    },
  });
  
function StyledRadio(props) {
    const classes = radioStyles();
  
    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }

export default function RegisterformSection() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    password: '',
    confirmpassword: '',
    username: '',
    telephone:'',
    share:"Yes",
    localisation:'',
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
    <div className={classes.section}>
        <form className={classes.form}>
         <Grid container spacing={1}>
    
        <Grid item xs={6}>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" style={{width:'100%',}}>
<InputLabel htmlFor="filled-adornment-name">Full Name*</InputLabel>
          <FilledInput
          required
          id="filled-adornment-name"
            value={values.name}
            onChange={handleChange('name')}
            labelWidth={70}
          />
         
        </FormControl>
        </Grid>
        <Grid item xs={6}>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" style={{width:'100%',}}>
<InputLabel htmlFor="filled-adornment-telephone">Telephone*</InputLabel>
          <FilledInput
          required
          id="filled-adornment-telephone"
            value={values.telephone}
            onChange={handleChange('telephone')}
            labelWidth={70}
          />
         
        </FormControl>

        </Grid>
        <Grid item xs={6}>
        //location  <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" style={{width:'100%',}}>
<InputLabel htmlFor="filled-adornment-localisation">Localisation*</InputLabel>
          <FilledInput
          required
          id="filled-adornment-localisation"
            value={values.localisation}
            onChange={handleChange('localisation')}
            labelWidth={70}
          />
         
        </FormControl>
            </Grid>
            <Grid item xs={6}>
            <FormControl component="fieldset" style={{width:'100%',}}>
  <FormLabel component="legend">Do you want to keep your location public?</FormLabel>
  <RadioGroup defaultValue={values.share} aria-label="location" name="customized-radios" >
    <FormControlLabel value="Yes" control={<StyledRadio />} label="Yes" />
    <FormControlLabel value="No" control={<StyledRadio />} label="No" />
   
  </RadioGroup>
</FormControl>
            </Grid>
            <Grid item xs={6}>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" style={{width:'100%',}}>
<InputLabel htmlFor="filled-adornment-username">UserName*</InputLabel>
          <FilledInput
          required
          id="filled-adornment-username"
            value={values.username}
            onChange={handleChange('username')}
            labelWidth={70}
          />
         
        </FormControl>
            </Grid>
            <Grid item xs={6}>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" style={{width:'100%',}}>
<InputLabel htmlFor="filled-adornment-email">Email*</InputLabel>
          <FilledInput
          required
          id="filled-adornment-email"
            value={values.email}
            onChange={handleChange('email')}
            labelWidth={70}
          />
         
        </FormControl>
            </Grid>
            <Grid item xs={6}>
                   
        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" style={{width:'100%',}}>
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
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
          />
        </FormControl>
                </Grid> 
            <Grid item xs={6}>
                    
                
        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" style={{width:'100%',}}>
          <InputLabel htmlFor="filled-adornment-confirmpassword">Confirm Password</InputLabel>
          <FilledInput
            id="filled-adornment-confirmpassword"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('confirmpassword')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle confirmpassword visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
            </Grid> 
            <Grid item xs={6}>
            <Button
                color='success'
                size='lg'
                target='_blank'
                rel='noopener noreferrer'
                type='submit'
              >
                Register
              </Button>
            </Grid> 
         </Grid>
                </form>
      </div>
   
  );
}
