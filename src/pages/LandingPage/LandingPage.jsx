import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// Gatsby
import {Link} from 'gatsby'



// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx'

// Sections for this page
import IntroSection from './Sections/IntroSection'
import TreatmentSection from './Sections/TreatmentSection'
import TeamSection from './Sections/TeamSection'
// import WorkSection from "./Sections/WorkSection.jsx";

// Images for this page
// import bg1 from 'assets/img/x-N4QTBfNQ8Nk-unsplash.jpg'
import bg1 from 'assets/img/bruce-mars-gJtDg6WfMlQ-unsplash-16_9.jpg'
// YAML data
import siteMetaData from 'data/siteMetaData.yml'
import indexPageData from 'data/indexPageData.yml'

const dashboardRoutes = []

class LandingPage extends React.Component
{
  render ()
  {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          routes={ dashboardRoutes }
          rightLinks={ <HeaderLinks /> }
          fixed
          { ...rest }
        />
        <Parallax filter image={ bg1 }>
          <div className={ classes.container }>
            <GridContainer>
              <GridItem xs={ 12 } sm={ 12 } md={ 6 }>
                <h1 className={ classes.title }>{ indexPageData.title }</h1>
                <h4>
                From initial assessment to treatment, we aim to provide a multimodal approach that utilises the specialised skills of our <strong>multidisciplinary team</strong> led by <strong>Dr. Mowafak Abdelghani</strong>, an expert in the management of chronic pain.

                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={ classNames( classes.main, classes.mainRaised ) }>
          <div className={ classes.container }>

            <IntroSection />
            <TreatmentSection />
            <TeamSection />
            {/* <WorkSection /> */ }
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles( landingPageStyle )( LandingPage )
