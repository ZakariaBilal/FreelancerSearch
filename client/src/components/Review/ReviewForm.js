import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import avatar from 'assets/img/faces/kendall.jpg';
import TextField from '@material-ui/core/TextField';
import Button from "components/CustomButtons/Button.js";

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
  const [values, setValues] = React.useState({
    profilepic: '',
    description: '',
    service: '',
    
  });
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
        
        <form className={classes.form}>
        <Grid item xs={12}>
        
        <TextField
id="outlined-multiline-static"
label="Review"
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
        <Button
  color='success'
  size='lg'
  rel='noopener noreferrer'
  type='submit'
>
  Review
</Button>
        </Grid>
        </form>
        </Grid> 
    </Grid>
      
     

    </div>
  );
}