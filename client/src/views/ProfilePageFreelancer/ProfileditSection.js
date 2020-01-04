import React from "react";
// @material-ui/core components
import { fade,
  withStyles,
  makeStyles,
 } from "@material-ui/core/styles";
  import InputBase from '@material-ui/core/InputBase';
// @material-ui/icons

import Button from "components/CustomButtons/Button.js";


import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

import Radio from '@material-ui/core/Radio';
// core components
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import clsx from 'clsx';


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

export default function ProfileditSection() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    profilepic: '',
    description: '',
    service: '',
    
  });

  return (
    <div className={classes.section}>
        <form className={classes.form}>
         <Grid container justify="center" spacing={5}>
    
        <Grid item xs={12}>
         

<TextField
id="outlined-multiline-static"
label="Description"
multiline
rows="5"
defaultValue=" "
variant="outlined"
style={{width:'70%',}}
required
value={values.description}
/>

 
        </Grid>
        <Grid item xs={12}>
         
<InputLabel htmlFor="grouped-native-select">Service</InputLabel>
<Select native defaultValue="" input={<Input id="grouped-native-select" />} required style={{width:'40%',}}>
<option value="" />
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
 
        </Grid>
        <Grid item xs={12}>
        <Button
  color='success'
  size='lg'
  target='_blank'
  rel='noopener noreferrer'
  type='submit'
>
  create Profile
</Button>
            </Grid> 
         </Grid>
                </form>
      </div>
   
  );
}
