import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import avatar from 'assets/img/faces/kendall.jpg';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';

import styles from "assets/jss/material-kit-react/views/landingPage.js";
const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);
  const useStyles = makeStyles(styles);
export default function Review() {
  const classes = useStyles();
  const [value, setValue] = React.useState(4);
  return (
    <div className={classes.root}>
    <Grid container>
        <Grid item style={{padding:'20px',}}>
        <Avatar  src={avatar} />
        </Grid> 
        <Grid item xs={6}>
            <Grid item xs={12}>
        <h5 style={{color:'#000000'}} className={classes.title} >Kendell jenner</h5>
        </Grid>
        <Grid item xs={12}>
        <Box component="fieldset" mb={3} borderColor="transparent">

        <StyledRating
          name="customized-color"
          value={2}
          getLabelText={value => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
        />
      </Box>
        </Grid>
        <Grid item xs={12}>
        <h5 style={{color:'#000000'}}>2019-11-27</h5>
        </Grid>
        <Grid item xs={12}>
        <h5 style={{color:'#000000'}}>Very good article i learned a lot reading it!</h5>
        </Grid>
        </Grid> 
    </Grid>
      
     

    </div>
  );
}