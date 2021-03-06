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
import Datetime from "react-datetime";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
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

export default function RequestForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    description: '',
    localisation: '',
    service: '{1}',
    dateExecution: '',
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
<InputLabel htmlFor="filled-adornment-description">Description*</InputLabel>
          <FilledInput
          required
          id="filled-adornment-description"
            value={values.description}
            onChange={handleChange('description')}
            labelWidth={70}
            multiline
          />
         
        </FormControl>
        </Grid>
        <Grid item xs={6}>
       

         
         
                
                  <FormControl variant="filled" style={{width:'100%',}}>
                  
                  <TextField
        id="date"
        label="Date of execution"
        type="date"
        defaultValue=""
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
                  </FormControl>
         


        </Grid>
        <Grid item xs={6}>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" style={{width:'100%',}}>
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

            <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" style={{width:'100%',}}>
<InputLabel htmlFor="grouped-native-select">Services</InputLabel>
<Select native defaultValue="1" input={<Input id="grouped-native-select" />} required style={{width:'40%',}}>
<option value={values.service} />
<optgroup label="House">
<option value={1}>Cleaning</option>
<option value={2}>Decoration</option>
<option value={3}>Errands</option>
</optgroup>
<optgroup label="Sport And Health">
<option value={4}>Personnal Coach</option>
<option value={5}>Swimming lessons</option>
<option value={6}>Yoga lessons</option>
<option value={7}>Professionnal Coach</option>
</optgroup>
<optgroup label="Tutoring">
<option value={8}>Music teacher</option>
<option value={9}>Math teacher</option>
</optgroup>
<optgroup label="Event">
<option value={10}>Photographer</option>
<option value={11}>DJ</option>
<option value={12}>Catering</option>
</optgroup>
<optgroup label="Garden">
<option value={13}>Gardening</option>
</optgroup>
<optgroup label="Housing">
<option value={14}>Plumber</option>
<option value={15}>Carpenter</option>
<option value={16}>Mechanics</option>
</optgroup>
</Select>
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
                Request
              </Button>
            </Grid> 
         </Grid>
                </form>
      </div>
   
  );
}
