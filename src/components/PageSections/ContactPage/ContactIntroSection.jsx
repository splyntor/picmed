import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'

// Icons
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/EmailOutlined'


// Data
import data from 'data/siteMetaData.yml'

// style
import defaultPageStyle from 'assets/jss/material-kit-react/pages/defaultPageStyle.jsx'

const ContactIntroSection = props => {
  const { classes } = props
  return (
    <section className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <a href={'tel:' + data.contact.phone}>
            <InfoArea
              title={data.contact.phone}
              description="Call our experienced admin team to make an appointment at a clinic of your choice."
              icon={PhoneIcon}
              iconColor="danger"
            />
          </a>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <a
            href={
              'mailto:' +
              data.contact.email +
              '?subject=' +
              data.contact.emailSubject
            }
          >
            <InfoArea
              title={data.contact.email}
              description="You can also email us and we will get back to you straight away."
              icon={EmailIcon}
              iconColor="danger"
            />
          </a>
        </GridItem>
      </GridContainer>
    </section>
  )
}

export default withStyles(defaultPageStyle)(ContactIntroSection)
