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
import defaultPageStyle from 'assets/jss/material-kit-react/pages/defaultPageStyle.jsx'

// Icons

import carmIcon from '@iconify/icons-medical-icon/i-cath-lab'
import injectionIcon from '@iconify/icons-medical-icon/i-immunizations'
import spineIcon from '@iconify/icons-medical-icon/i-imaging-root-category'

const XraySection = props => {
  const { classes } = props
  const data = treatmentsPageData.procedures.xray
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>{data.title}</h2>
          <h5 className={classes.description}>{data.description}</h5>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <InfoAreaIconify
            title="Epidural Injections"
            description="Cervical, lumbar and caudal epidurals as well as Transforaminal Nerve Root Blocks"
            icon={spineIcon}
            iconColor="info"
          />

          <InfoAreaIconify
            title="Radiofrequency Ablation"
            description="RFA for lumbar and cervical medial branch nerves, hip and knee pain as well as pulsed RFA for suprascapular nerve, cervical and lumbar dorsal root ganglia."
            icon={carmIcon}
            iconColor="danger"
          />
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <InfoAreaIconify
            title="Joint Injections and Nerve Blocks"
            description="Facet and sacro-iliac joint injections, intra-articular injections and nerve blocks for knee and hip pain, diagnostic medial branch block, neuroma/scar related pain injections, ganglion Impar Blocks"
            icon={injectionIcon}
            iconColor="success"
            vertical
          />
        </GridItem>

        {/* <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
          
          </GridItem> */}
      </GridContainer>
    </div>
  )
}

export default withStyles(defaultPageStyle)(XraySection)
