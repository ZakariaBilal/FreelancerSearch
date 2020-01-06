import React from "react";
// @material-ui/core components
import { fade,
  withStyles,
  makeStyles,
 } from "@material-ui/core/styles";
  import InputBase from '@material-ui/core/InputBase';
// @material-ui/icons

import Box from '@material-ui/core/Box';

import Rating from '@material-ui/lab/Rating';

import Radio from '@material-ui/core/Radio';
// core components
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import clsx from 'clsx';
import service from 'assets/img/freelancer-1.jpg';

import Grid from '@material-ui/core/Grid';
import Button from "components/CustomButtons/Button.js";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
  
    const [value, setValue] = React.useState(4);
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

export default function ProfilFreeSection() {
  const classes = useStyles();
  

  
  const [value, setValue] = React.useState(4);
  return (
    <div className={classes.section}>
      
         <Grid container spacing={3}>
         <Grid item xs={12}>
         <Grid item xs={6}>
         <Rating
          name="simple-controlled"
          value={value}
          readOnly 
        />
   </Grid>
         </Grid>
        <Grid item xs={12}>
        <Grid item xs={6}>
        <h5 className={classes.title}>Freelancer's description :</h5>
        <Box bgcolor="secondary.main" color="secondary.contrastText" p={2}>
         I am a devoted motivated worker i'll get the work done in no time 
        </Box>
        </Grid>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={12}>
        <Grid item xs={6}>
        <h5 className={classes.title}>Freelancer's services :</h5>
        </Grid>
        </Grid>
        
        <Grid item xs={5}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={service}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          I'll make your parties very fun 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Category : DJ
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            You can select the kind of music you like and i'll play it for you and your friends and family 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{paddingLeft: '150px'}}>
       
        <Button size="small" color="#000000">
          Make a request 
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={5}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={service}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          I'll make your parties very fun 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Category : Band
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            You can select the kind of music you like and i'll play it for you and your friends and family 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{paddingLeft: '150px'}}>
       
        <Button size="small" color="#000000">
          Make a request 
        </Button>
      </CardActions>
    </Card>
        </Grid>
        </Grid>
     
              
      </div>
   
  );
}
