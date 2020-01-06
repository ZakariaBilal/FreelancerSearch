import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import avatar from 'assets/img/faces/kendall.jpg';
import TextField from '@material-ui/core/TextField';
import Button from "components/CustomButtons/Button.js";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);
export default function Review() {
  const classes = useStyles();
  const [value, setValue] = React.useState(4);
  const [values, setValues] = React.useState({

    comment: '',

    
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
        
        <form className={classes.form}>
        <Grid item xs={12}>
        
        <TextField
id="outlined-multiline-static"
label="Comment"
multiline
rows="5"
defaultValue=" "
variant="outlined"
style={{width:'70%',}}
required
value={values.comment}
/>

        </Grid>
        <Grid item xs={12}>
        <Button
  color='success'
  size='lg'
  rel='noopener noreferrer'
  type='submit'
>
  Comment
</Button>
        </Grid>
        </form>
        </Grid> 
    </Grid>
      
     

    </div>
  );
}