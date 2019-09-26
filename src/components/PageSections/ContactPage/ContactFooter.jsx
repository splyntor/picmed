import React from 'react'
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
import CustomInput from 'components/CustomInput/CustomInput.jsx'
import Button from 'components/CustomButtons/Button.jsx'

import { Link } from 'gatsby'

// style
import defaultPageStyle from 'assets/jss/material-kit-react/pages/defaultPageStyle.jsx'

const ContactFooter=props=>{
  
  const {classes} = props
  return (
    <section className={classes.footerContact}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          
          <Card plain>
        <p className={classes.description}>If you would like to enquire about Piccadilly Medical or any of our services please get in touch with us using any of the contact methods found below. We can be contacted by telephone, e-mail, or by filling our contact form by providing us with your name, contact details and enquiry message. We would be delighted to hear from you or answer any questions that you may have.
          </p>
        </Card>
        </GridItem>
      </GridContainer>
    </section>
  )
}

export default withStyles(defaultPageStyle)(ContactFooter)