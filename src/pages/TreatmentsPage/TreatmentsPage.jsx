import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import { Divider } from '@material-ui/core'
// @material-ui/icons
import Chat from '@material-ui/icons/Chat'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import Card from 'components/Card/Card.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx'

// Sections for this page
import SimpleSection from './Sections/SimpleSection.jsx'
import XraySection from './Sections/XraySection.jsx'
import UltrasoundSection from './Sections/UltrasoundSection.jsx'

// Images for this page
// import bg1 from 'assets/img/x-N4QTBfNQ8Nk-unsplash.jpg'
// import bg1 from 'assets/img/bruce-mars-gJtDg6WfMlQ-unsplash-16_9.jpg'
import bg1 from 'assets/img/mohamed-nohassi-odxB5oIG_iA-unsplash.jpg'
// YAML data
import siteMetaData from 'data/siteMetaData.yml'
import treatmentsPageData from 'data/treatmentsPageData.yml'

const dashboardRoutes = []
class TreatmentsPage extends React.Component
{
  render ()
  {
    const { classes, ...rest } = this.props

    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )
    return (
      <div>
        <Header
          color="white"
          routes={ dashboardRoutes }
          brand={ siteMetaData.title }
          rightLinks={ <HeaderLinks /> }
          fixed
          changeColorOnScroll={ {
            height: 400,
            color: 'warning',
          } }
          { ...rest }
        />
        <Parallax medium filter image={ bg1 }>
          <div className={ classes.container }>
            <GridContainer>
              <GridItem xs={ 12 } sm={ 12 } md={ 6 }>
                <h1 className={ classes.title }>{ treatmentsPageData.hero.title }</h1>
                <h4>{ treatmentsPageData.hero.description }</h4>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={ classNames( classes.main, classes.mainRaised ) }>
          <div className={ classes.section }>
            <GridContainer justify="center">
              <GridItem xs={ 12 } sm={ 12 } md={ 8 }>
                <h2 className={ classes.title }>
                  { treatmentsPageData.intro.title }
                </h2>
                <h5 className={ classes.description }>
                  { treatmentsPageData.intro.description }
                </h5>
                <br />

                <XraySection />
                <UltrasoundSection />
                <SimpleSection />
              </GridItem>
            </GridContainer>

            <Divider light variant="fullWidth" />



          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default withStyles( landingPageStyle )( TreatmentsPage )
