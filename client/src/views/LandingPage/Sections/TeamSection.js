import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles,withStyles  } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";
import Rating from '@material-ui/lab/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DescriptionIcon from '@material-ui/icons/Description';


const useStyles = makeStyles(styles);

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);
const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our Best Freelancers</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Gigi Hadid
                <br />
                <small className={classes.smallTitle}>Wedding Planner</small>
              </h4>
              <CardBody>

              <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="customized-icons"
          value={2}
          getLabelText={value => customIcons[value].label}
          IconContainerComponent={IconContainer}
        />
      </Box>
                
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  
                  color="transparent"
                  className={classes.margin5}
                >
                  Articles
                  <DescriptionIcon className={classes.icon} />

                </Button>
                
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Christian Louboutin
                <br />
                <small className={classes.smallTitle}>Photographe</small>
              </h4>
              <CardBody>
                
              <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="customized-icons"
          value={2}
          getLabelText={value => customIcons[value].label}
          IconContainerComponent={IconContainer}
        />
      </Box>
            
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Button
                  
                  color="transparent"
                  className={classes.margin5}
                >
                  Articles
                  <DescriptionIcon className={classes.icon} />

                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Kendall Jenner
                <br />
                <small className={classes.smallTitle}>DIY</small>
              </h4>
              <CardBody>
                
              <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="customized-icons"
          value={2}
          getLabelText={value => customIcons[value].label}
          IconContainerComponent={IconContainer}
        />
      </Box>
            
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Button
                  
                  color="transparent"
                  className={classes.margin5}
                >
                  Articles
                  <DescriptionIcon className={classes.icon} />

                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
