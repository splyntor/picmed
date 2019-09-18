import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import InputAdornment from '@material-ui/core/InputAdornment'
// @material-ui/icons
import Email from '@material-ui/icons/Email'
import People from '@material-ui/icons/People'
import Phone from '@material-ui/icons/Phone'
// core components
import Header from 'components/Header/Header.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import CustomInput from 'components/CustomInput/CustomInput.jsx'

import loginPageStyle from 'assets/jss/material-kit-react/views/loginPage.jsx'

import bg1 from 'assets/img/bruce-mars-gJtDg6WfMlQ-unsplash-16_9.jpg'

// YAML data
import siteMetaData from 'data/siteMetaData.yml'
import indexPageData from 'data/indexPageData.yml'
class ContactPage extends React.Component
{
  constructor ( props )
  {
    super( props )
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: 'cardHidden',
    }
  }
  componentDidMount ()
  {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function ()
      {
        this.setState( { cardAnimaton: '' } )
      }.bind( this ),
      700
    )
  }
  render ()
  {
    const { classes, ...rest } = this.props
    return (
      <div>
        <Header
          color="white"
          brand={ siteMetaData.title }
          rightLinks={ <HeaderLinks /> }
          fixed
          changeColorOnScroll={ {
            height: 400,
            color: 'info',
          } }
          { ...rest }
        />
        <Parallax filter image={ bg1 }>
          <div className={ classes.container }>
            <GridContainer>
              <GridItem xs={ 12 } sm={ 12 } md={ 6 }>
                <h1 className={ classes.title }>Contact Us</h1>
                <h4>
                  <strong>Phone: </strong>0123456789<br/>
                  <strong>Email: </strong>adasd@asdas.com<br/>
                </h4>

                <Card plain className={ classes[ this.state.cardAnimaton ] }>
                  <form className={ classes.form }
                    id="fs-frm"
                    name="simple-contact-form"
                    acceptCharset="utf-8"
                    action="https://formspree.io/YOUR_EMAIL_HERE"
                    method="post"
                  >
                    <fieldset id="fs-frm-inputs">
                      <CustomInput
                        labelText="Full Name"
                        id="full-name"
                        formControlProps={ {
                          fullWidth: true,
                        } }
                        inputProps={ {
                          type: 'text',
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={ classes.inputIconsColor } />
                            </InputAdornment>
                          )
                        } }
                      />
                      <CustomInput
                        labelText="Email"
                        id="email-address"
                        name='_replyto'
                        formControlProps={ {
                          fullWidth: true,
                        } }
                        inputProps={ {
                          type: 'email',
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={ classes.inputIconsColor } />
                            </InputAdornment>
                          )
                        } }
                      />
                      <CustomInput
                        labelText="Phone"
                        id="phone"
                        name='phone'
                        formControlProps={ {
                          fullWidth: true,
                        } }
                        inputProps={ {
                          type: 'phone',
                          endAdornment: (
                            <InputAdornment position="end">
                              <Phone className={ classes.inputIconsColor } />
                            </InputAdornment>
                          )
                        } }
                      />


                      <CustomInput labelText="Message" id="message" name='message'
                        formControlProps={ {
                          fullWidth: true,
                        } }
                        inputProps={ {
                          type: 'text',
                          multiline: true,
                          rows: 4,
                          rowsMax: 4,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={ classes.inputIconsColor } />
                            </InputAdornment>
                          )
                        } }
                      />
                      <input type="hidden" name="_subject" id="email-subject"
                        value="Contact Form Submission"/>
                    </fieldset>
                    <CustomInput labelText='Submit' value='submit' name='Submit' id='submit'
                    inputProps={{
                      type:'submit'
                    }}/>

                    
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <GridContainer justify='center' >
          <GridItem xs={ 12 } sm={ 12 } md={ 4 }>

          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles( loginPageStyle )( ContactPage )
