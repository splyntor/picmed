import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// React icons
import { FaPlay } from 'react-icons/fa';

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page


// Images for this page
// import bg1 from 'assets/img/x-N4QTBfNQ8Nk-unsplash.jpg'
import bg1 from 'assets/img/bruce-mars-gJtDg6WfMlQ-unsplash-16_9.jpg'
// YAML data
import siteMetaData from 'data/siteMetaData.yml'
import indexPageData from 'data/indexPageData.yml'

const dashboardRoutes = [];
class ServicesPage extends React.Component {
    
    render () {
        const { classes, ...rest } = this.props
        return (
            <div><Header
            color="info"
            routes={ dashboardRoutes }
            brand={ siteMetaData.title }
            rightLinks={ <HeaderLinks /> }
            fixed
            changeColorOnScroll={ {
              height: 400,
              color: "info"
            } }
            { ...rest }
          />
            <Parallax filter image={ bg1 }>
              <div className={ classes.container }>
                <GridContainer>
                  <GridItem xs={ 12 } sm={ 12 } md={ 6 }>
                    <h1 className={ classes.title }>
                      { indexPageData.title }
                    </h1>
                    <h4>
                      { indexPageData.subtitle }
                    </h4>
    
    
                  </GridItem>
                </GridContainer>
              </div>
            </Parallax>
            <div className={ classNames( classes.main, classes.mainRaised ) }>
             
            </div>
            <Footer />
            </div>
    )
        }
}
export default withStyles( landingPageStyle )( ServicesPage );