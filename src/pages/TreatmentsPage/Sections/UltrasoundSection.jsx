/* eslint-disable react/jsx-key */
import React from 'react'

import Carousel from 'react-slick'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import Chat from '@material-ui/icons/Chat'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import InfoAreaIconify from 'components/InfoAreaIconify/InfoAreaIconify.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'
// YAML Data
import treatmentsPageData from 'data/treatmentsPageData.yml'

// Styles
import treatmentsPageStyle from 'assets/jss/material-kit-react/views/treatmentsPageStyle.jsx'


// Icons
// import brainIcon from '@iconify/icons-whh/brain'
import brainIcon from '@iconify/icons-medical-icon/i-neurology'
import waveIcon from '@iconify/icons-wpf/audio-wave'
import surgeryIcon from '@iconify/icons-medical-icon/i-surgery'
import spineIcon from '@iconify/icons-medical-icon/i-imaging-root-category'
import physicalTherapyIcon from '@iconify/icons-medical-icon/i-physical-therapy'

class UltrasoundSection extends React.Component
{
  render ()
  {
    const { classes } = this.props
    const data = treatmentsPageData.procedures.uss
    return (
      <div className={ classes.section }>
        <GridContainer justify="center">
          <GridItem xs={ 12 } sm={ 12 } md={ 8 }>
            <h2 className={ classes.title }>{ data.title }</h2>
            <h5 className={ classes.description }>{ data.description }</h5>
          </GridItem>
        </GridContainer>

        <GridContainer>

          <GridItem xs={ 12 } sm={ 12 } md={ 6 }>
            <InfoAreaIconify
              title='Joint injections and nerve blocks'
              description='Ultrasound guided injections for the elbow and coccyx as well as nerve blocks of Suprascapular, Piriformis, Pudendal, Genitofemoral, Stellate Ganglion and Inguinal Nerves'
              icon={ waveIcon }
              iconColor='success'
              vertical
              
            />

          </GridItem>

          <GridItem xs={ 12 } sm={ 12 } md={ 6 }>
            <InfoAreaIconify
              title='ACNES Block'
              description='USS-guided nerve block for anterior cutaneous nerve entrapment syndrome that is associated with chronic abdominal wall pain'
              icon={ surgeryIcon }
              iconColor='info'
              
            />

         <InfoAreaIconify
              title='Migraine and Chronic Craniofacial Pain Syndromes'
              description='Greater Occipital and Supra-orbital nerve blocks'
              icon={ brainIcon }
              iconColor='danger'
              
            />
            
          </GridItem>

        </GridContainer>
      </div>
    )
  }
}
export default withStyles( treatmentsPageStyle )( UltrasoundSection )
