import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import avatar from 'assets/img/faces/kendall.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

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
        <h5 className={classes.title} >Kendell jenner</h5>
        </Grid>
        <Grid item xs={12}>
        <Rating
          name="simple-controlled"
          value={value}
          readOnly 
        />
        </Grid>
        <Grid item xs={12}>
        <h5>2019-11-27</h5>
        </Grid>
        <Grid item xs={12}>
        <h5>Outstanding service, great attention to detail, a willingness to go the extra mile - if I could give a 6 star rating, I would. Highly recommended.</h5>
        </Grid>
        </Grid> 
    </Grid>
      
     

    </div>
  );
}