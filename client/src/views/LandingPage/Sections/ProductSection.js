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
export default function ProductSection() {
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
       

        <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      </div>
    </div>
  );
}
