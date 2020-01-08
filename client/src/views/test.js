import React from "react";
// @material-ui/core components
import { fade,
  withStyles,
  makeStyles,
 } from "@material-ui/core/styles";
  import InputBase from '@material-ui/core/InputBase';
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

import InfoIcon from '@material-ui/icons/Info';
import {tileData} from '../../../tileData';

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

const images = [
    {
      url: '/static/images/grid-list/breakfast.jpg',
      title: 'Breakfast',
      width: '40%',
    },
    {
      url: '/static/images/grid-list/burgers.jpg',
      title: 'Burgers',
      width: '30%',
    },
    {
      url: '/static/images/grid-list/camera.jpg',
      title: 'Camera',
      width: '30%',
    },
  ];
export default function test() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>

        <BootstrapInput  className={classes.input}
            placeholder="Search Freelancer"
            inputProps={{ 'aria-label': 'Search Freelancer' }}
            id="bootstrap-input" />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon style={{width:'40px',height:'40px'}}/>
          </IconButton>
          <h2 className={classes.title}>Categories and services</h2>
        
       
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
            
            
                 
                </GridItem>
      </GridContainer>
      <div>
      {tileData.map(image => (
    <ButtonBase
      focusRipple
      key={image.title}
      className={classes.image}
      focusVisibleClassName={classes.focusVisible}
      style={{
        width: image.width,
      }}
    >
      <span
        className={classes.imageSrc}
        style={{
          backgroundImage: `url(${image.url})`,
        }}
      />
      <span className={classes.imageBackdrop} />
      <span className={classes.imageButton}>
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          className={classes.imageTitle}
        >
          {image.title}
          <span className={classes.imageMarked} />
        </Typography>
      </span>
    </ButtonBase>
  ))}

       
      </div>
    </div>
  );
}


