// Default Layout

import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// MKR components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

// Styles
import defaultLayoutStyle from 'assets/jss/material-kit-react/layouts/defaultLayoutStyle.jsx'

// import bg1 from 'assets/img/x-N4QTBfNQ8Nk-unsplash.jpg'
import defaultHeroImage from 'assets/img/bruce-mars-gJtDg6WfMlQ-unsplash-16_9.jpg'

function DefaultLayout({ ...props }) {
  const { classes, heroImage, heroTitle, heroSubtitle, children } = props
  return (
    <div>
      <Header rightLinks={<HeaderLinks />} fixed />
      <Parallax filter image={heroImage}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h2 className={classes.title}>{heroTitle}</h2>
              <h5 className={classes.subtitle}>{heroSubtitle}</h5>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

DefaultLayout.defaultProps = {
  heroImage: defaultHeroImage,
}

export default withStyles(defaultLayoutStyle)(DefaultLayout)
