import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import { List, ListItem, Grid } from "@material-ui/core"
// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import InfoAreaIconify from 'components/InfoAreaIconify/InfoAreaIconify.jsx'

// Styles
import treatmentsPageStyle from 'assets/jss/material-kit-react/views/treatmentsPageStyle.jsx'
// Icons
import registrationIcon from '@iconify/icons-medical-icon/i-registration'
import physioIcon from '@iconify/icons-medical-icon/i-physical-therapy'
import psychIcon from '@iconify/icons-medical-icon/i-mental-health'
// Data
import treatmentsPageData from 'data/treatmentsPageData.yml'
const data = treatmentsPageData.procedures.simple

class SimpleSection extends React.Component
{
  render ()
  {
    const { classes } = this.props
    const makeList = ( e ) =>
    {
      return (
        <span>{ e }<br /></span>
      )
    }
    return (
      <div className={ classes.section }>
        <GridContainer justify="center">
          <GridItem xs={ 12 } sm={ 12 } md={ 8 }>
            <h2 className={ classes.title }>Other services</h2>
            <h5 className={ classes.description }>
              In addition to complex interventions, we also provide routine procedures to treat common conditions as well as excellent psychological and physical support from our experienced multi-disciplinary team.
            </h5>
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
            <InfoAreaIconify
              title='Simple Procedures'
              description='Trigger Point Injections, Tender Point Injections, High Dose Capsaicin Patch Application, Lignocaine Infusions, Botox Injections for Migraines'
              icon={ registrationIcon }
              iconColor='success'
              vertical
            />
          </GridItem>
          <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
            <InfoAreaIconify
              title='Psychological support'
              description='Expert mental health support from Dr. Kurkar, Consultant Psychiatrist to improve psychological well-being'
              icon={ psychIcon }
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
            <InfoAreaIconify
              title='Physiotherapy'
              description='Physical therapy and fitness advice from our dedicated physiotherapist to help you progress'
              icon={ physioIcon }
              iconColor='danger'
              vertical
            />

          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles( treatmentsPageStyle )( SimpleSection )
