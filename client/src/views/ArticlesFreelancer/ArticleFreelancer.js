import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { 
  makeStyles,createMuiTheme, MuiThemeProvider 
  } from "@material-ui/core/styles";

import logo from "assets/img/custom/logoreal.png";
import Footer from "components/Footer/Footer.js";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderAfterLinks from "components/HeaderAfterConnection/HeaderAfterLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Comment from "components/Comment/Comment.js";
import CommentForm from "components/Comment/CommentForm.js";

// Sections for this page




const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ArticleFreelancer(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    
    <div>
      {/* <Header
        color='white'
        routes={dashboardRoutes}
        brand='Material Kit React'
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      /> */}
<Header
      brand={<img src={logo}/>}
      fixed
      leftLinks={<span />}
      rightLinks={<HeaderAfterLinks />}
    />
      <Parallax filter image={require("assets/img/custom/deskunorgnized.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Freelancer</h1>
              
              <br />
             
            </GridItem>
         

          </GridContainer>
        </div>

     
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)} style={{padding:'50px',}}>
        <div className={classes.container}>
        
        <h4 style={{color:'#000'}}>Un travailleur indépendant, ou travailleur autonome au Canada, est à la fois entrepreneur, propriétaire (de ses moyens de production) et son propre employé (sans être pour autant salarié). Il est maître de ses décisions concernant son travail mais doit toutefois s'adapter aux demandes de sa clientèle.

Le terme anglais « freelance » est aussi utilisé, notamment dans les services intellectuels.

La progression spectaculaire du nombre de travailleurs indépendants dans les sociétés occidentales depuis le milieu des années 20001 et les transformations que cela entraîne sur le marché du travail en font un phénomène de société très souvent couvert par les médias2,3,4,5,6.
Ce type de travailleur est très présent dans les économies de marché (agriculture, commerce, artisanat, professions libérales, etc.) où il apporte souvent une voie de promotion sociale.

Les domaines parmi lesquels les travailleurs indépendants sont courants sont l'informatique, la communication, le marketing, le graphisme, l’infographie, le conseil, la traduction, la formation, les postes d’attaché de presse ou attaché de relations publiques, l'apport d'affaires, les nouveaux métiers de santé...

Avec la numérisation de la société et de entreprises apparaissent de nouveaux métiers qui sont souvent choisis par les travailleurs indépendants, comme la science des données, le devops ou le machine learning7.

En Europe, il existe quelques organisations de défense des travailleurs indépendants, dont la Confédération européenne des indépendants, plus ou moins reconnues par les instances européennes, qui jouent généralement un rôle de groupe de pression. 
Le travail indépendant varie en fonction de la personne. D'une façon générale, il prospecte sa clientèle, définit avec elle sa mission et la réalise lui-même ensuite. Cependant, certains exigent des contrats signés avec le client, alors que d'autres se contentent d'un accord verbal. Certains demandent une estimation écrite du temps de travail ainsi qu'un versement partiel préalable au travail, alors que pour d'autres ceci n'est ni pratique ni nécessaire.

La rémunération du travail aussi varie énormément. Les travailleurs indépendants peuvent facturer à l'heure ou à la journée, ou au forfait en fonction de la mission en question. Cependant, les gros clients, telles les grandes entreprises, ont parfois des politiques internes vis-à-vis du paiement des services d'un travailleur indépendant, donc les travailleurs indépendants habitués à facturer à l'heure peuvent se voir proposer une somme fixe pour un travail particulier. Il n'est cependant pas rare, si les conditions du client ne sont pas satisfaisantes, que le travailleur indépendant essaie de négocier avant d'accepter ou de rejeter un travail.  </h4>
        
        <Comment />
        <CommentForm />
        </div>
      </div>
      <Footer />
    </div>
      
  );
}
