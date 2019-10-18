import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CustomInput from 'components/CustomInput/CustomInput.jsx'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from 'components/CustomButtons/Button.jsx'

// @material-ui/icons
import EmailIcon from '@material-ui/icons/Email'
import PeopleIcon from '@material-ui/icons/People'
import PhoneIcon from '@material-ui/icons/Phone'

// Style
import contactPageStyle from 'assets/jss/material-kit-react/pages/contactPageStyle.jsx'

const ContactForm = props => {
  const { classes } = props
  return (
    <section className={classes.container}>
      <Card plain>
        <CardHeader>
          <h3 className={classes.cardTitle}>Book an appointment</h3>
          <h5 className={classes.description}>
            Alternatively, use the form below to get in touch with us.
          </h5>
        </CardHeader>
        <CardBody component="fieldset" id="fs-frm-inputs">
          <form
            className={classes.form}
            id="fs-frm"
            name="picmed-contact-form"
            acceptCharset="utf-8"
            action="https://formspree.io/info@piccadillymedical.com"
            method="POST"
          >
            <CustomInput
              labelText="Full Name"
              id="full-name"
              name="name"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: 'text',
                endAdornment: (
                  <InputAdornment position="end">
                    <PeopleIcon className={classes.inputIconsColor} />
                  </InputAdornment>
                ),
              }}
            />
            <CustomInput
              labelText="Email"
              id="email-address"
              name="_replyto"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: 'email',
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon className={classes.inputIconsColor} />
                  </InputAdornment>
                ),
              }}
            />
            <CustomInput
              labelText="Phone"
              id="phone"
              name="phone"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: 'phone',
                endAdornment: (
                  <InputAdornment position="end">
                    <PhoneIcon className={classes.inputIconsColor} />
                  </InputAdornment>
                ),
              }}
            />

            <CustomInput
              labelText="Message"
              id="message"
              name="message"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: 'text',
                multiline: true,
                rows: 10,
                rowsMax: 10,
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon className={classes.inputIconsColor} />
                  </InputAdornment>
                ),
              }}
            />
            <input
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Contact Form Submission"
            />
            <Button type="submit" color="info">
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
    </section>
  )
}

export default withStyles(contactPageStyle)(ContactForm)
