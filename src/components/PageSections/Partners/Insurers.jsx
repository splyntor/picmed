import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'

// Images
import AllianzImage from 'assets/img/partners/allianz.png'
import AvivaImage from 'assets/img/partners/aviva.png'
import BupaImage from 'assets/img/partners/bupa.png'
import CignaImage from 'assets/img/partners/cigna.png'
import VitalityImage from 'assets/img/partners/vitality.png'
import WpaImage from 'assets/img/partners/wpa.png'

// Style

import defaultPageStyle from 'assets/jss/material-kit-react/pages/defaultPageStyle.jsx'

const tileData = [
  {
    title: 'Aviva Health Insurance',
    img: AvivaImage,
    url: 'https://www.aviva.co.uk/health/health-products/',
  },
  {
    title: 'BUPA Health Insurance',
    img: BupaImage,
    url: 'https://www.bupa.co.uk/health/health-insurance',
  },
  {
    title: 'CIGNA',
    img: CignaImage,
    url: 'https://www.cigna.co.uk/',
  },
  {
    title: 'Vitality',
    img: VitalityImage,
    url: 'https://www.vitality.co.uk/',
  },
  {
    title: 'WPA',
    img: WpaImage,
    url: 'https://www.wpa.org.uk/',
  },
  {
    title: 'Allianz Healthcare',
    img: AllianzImage,
    url: 'https://www.allianzcare.com/en.html',
  },
]

const InsurersList = props => {
  const { classes } = props
  const imageClasses = classNames(classes.insurerImage, classes.imgFluid)

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Covered by all major insurers</h2>
      <GridContainer justify="center">
        {tileData.map(tile => (
          <GridItem key={tile.img} xs={2}>
            <a href={tile.url}>
              <img src={tile.img} alt={tile.title} className={imageClasses} />
            </a>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  )
}

export default withStyles(defaultPageStyle)(InsurersList)
