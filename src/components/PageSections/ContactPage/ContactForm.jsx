import React from 'react'
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import InputAdornment from '@material-ui/core/InputAdornment'
// @material-ui/icons
import Email from '@material-ui/icons/Email'
import People from '@material-ui/icons/People'
import Phone from '@material-ui/icons/Phone'
// core components

import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
import CustomInput from 'components/CustomInput/CustomInput.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import contactPageStyle from 'assets/jss/material-kit-react/pages/contactPageStyle.jsx'

class ContactForm extends React.Component
{

  // constructor(props)
  // {
  //   super(props);
  //   // we use this to make the card to appear after the page has been rendered
  //   this.state = {
  //     cardAnimaton: "cardHidden"
  //   };
  // }
  // componentDidMount()
  // {
  //   // we add a hidden class to the card and after 700 ms we delete it and the transition appears
  //   setTimeout(
  //     function ()
  //     {
  //       this.setState({ cardAnimaton: "" });
  //     }.bind(this),
  //     700
  //   );
  // }
  render()
  {
    const { classes, ...rest } = this.props;
    return (
      <section className={classes.container}>
        <Card plain>
          <form
            className={classes.form}
            id="fs-frm"
            name="simple-contact-form"
            acceptCharset="utf-8"
            action="https://formspree.io/YOUR_EMAIL_HERE"
            method="post"
          >
            <CardHeader >
              <h3 className={classes.cardTitle}>Contact Us</h3>
            </CardHeader>
            <CardBody component='fieldset' id="fs-frm-inputs">

              <CustomInput
                labelText="Full Name"
                id="full-name"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: 'text',
                  endAdornment: (
                    <InputAdornment position="end"><People className={classes.inputIconsColor} />
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
                      <Email className={classes.inputIconsColor} />
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
                      <Phone className={classes.inputIconsColor} />
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
                      <Email className={classes.inputIconsColor} />
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
              <Button type='submit' color='success'>Submit</Button>
            </CardBody>
          </form>

        </Card>

      </section>)

  }
}

export default withStyles(contactPageStyle)(ContactForm)