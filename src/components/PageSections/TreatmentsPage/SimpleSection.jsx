import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoAreaIconify from 'components/InfoAreaIconify/InfoAreaIconify.jsx'

// Gatsby

import { Link } from 'gatsby'

// Icons
import registrationIcon from '@iconify/icons-medical-icon/i-registration'
import psychIcon from '@iconify/icons-medical-icon/i-mental-health'
import physioIcon from '@iconify/icons-medical-icon/i-physical-therapy'

// Styles
import defaultPageStyle from 'assets/jss/material-kit-react/pages/defaultPageStyle.jsx'

const SimpleSection = props => {
  const { classes } = props
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Other services</h2>
          <h5 className={classes.description}>
            In addition to complex interventions, we also provide routine
            procedures to treat common conditions as well as excellent
            psychological and physical support from our experienced
            multi-disciplinary team.
          </h5>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <InfoAreaIconify
            title="Simple Procedures"
            description="Trigger Point Injections, Tender Point Injections, High Dose Capsaicin Patch Application, Lignocaine Infusions, Botox Injections for Migraines"
            icon={registrationIcon}
            iconColor="success"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoAreaIconify
            title="Psychological support"
            description={
              <>
                Expert mental health support from{' '}
                <Link to="/team#Kurkar">
                  Dr. Kurkar, Consultant Psychiatrist
                </Link>{' '}
                to improve psychological well-being
              </>
            }
            icon={psychIcon}
            iconColor="info"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoAreaIconify
            title="Physiotherapy"
            description={
              <>
                Physical therapy and fitness advice from{' '}
                <Link to="/team#Loughhead">Debbie Loughhead</Link>, our
                dedicated physiotherapist to help you progress
              </>
            }
            icon={physioIcon}
            iconColor="danger"
            vertical
          />
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default withStyles(defaultPageStyle)(SimpleSection)
