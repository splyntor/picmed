import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons
import mergeIcon from '@material-ui/icons/MergeType'
import groupIcon from '@material-ui/icons/GroupTwoTone'
import clockIcon from '@material-ui/icons/ScheduleTwoTone'
import multimodalIcon from '@iconify/icons-medical-icon/i-interpreter-services'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'
import InfoAreaIconify  from 'components/InfoAreaIconify/InfoAreaIconify.jsx'
import treatmentStyle from 'assets/jss/material-kit-react/views/landingPageSections/treatmentStyle.jsx'

// YAML data
import indexPageData from 'data/indexPageData.yml'
import treatmentData from 'data/treatmentData.yml'
class TreatmentSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>{treatmentData.title}</h2>
            <h5 className={classes.description}>{treatmentData.content}</h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title={treatmentData.blurb1.title}
                description={treatmentData.blurb1.content}
                icon={groupIcon}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title={treatmentData.blurb2.title}
                description={treatmentData.blurb2.content}
                icon={clockIcon}
                iconColor="danger"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              {/* <InfoArea
                title={treatmentData.blurb3.title}
                description={treatmentData.blurb3.content}
                icon={mergeIcon}
                iconColor="success"
                vertical
              /> */}
              <InfoAreaIconify
                title={treatmentData.blurb3.title}
                description={treatmentData.blurb3.content}
                icon={multimodalIcon}
                iconColor="success"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(treatmentStyle)(TreatmentSection)
