import React from 'react'

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import LockOutlined from "@material-ui/icons/LockOutlined";
// React icons
import { FaFacebook, FaTwitter, FaGooglePlusG } from 'react-icons/fa';
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import { Grid } from '@material-ui/core';

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

class ContactPage extends React.Component
{
  constructor( props )
  {
    super( props );
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount ()
  {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function ()
      {
        this.setState( { cardAnimaton: "" } );
      }.bind( this ),
      700
    );
  }
  render ()
  {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
            <Card className={ classes[ this.state.cardAnimaton ] }>
              <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/YOUR_EMAIL_HERE" method="post">
                <fieldset id="fs-frm-inputs">
                    <CustomInput labelText="Full Name"
                    id="full-name"
                    formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{ type: "text" }}
                    />
                  <label for="full-name">Full Name</label>
                  <input type="text" name="name" id="full-name" placeholder="First and Last" required="" />
                  <label for="email-address">Email Address</label>
                  <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" />
                  <label for="message">Message</label>
                  <textarea rows="5" name="message" id="message" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required=""></textarea>
                  <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
                </fieldset>
                <input type="submit" value="Submit" />
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles( loginPageStyle )( ContactPage )
