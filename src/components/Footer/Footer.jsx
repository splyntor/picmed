/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles, Button, Icon } from "@material-ui/core";

// MKR Components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
// import IconButton from '@material-ui/core/IconButton'

import Credits from 'components/Credits/Credits.jsx'
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import PhoneIcon from '@material-ui/icons/PhoneInTalk'
import EmailIcon from '@material-ui/icons/EmailOutlined'
import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";


// Sections for this page
import ContactForm from 'components/PageSections/ContactPage/ContactForm'
import ClinicSection from 'components/PageSections/ContactPage/Clinics'

function Footer({ ...props })
{
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <section>
        <h2 className={classes.title}>Contact us to make an appointment</h2>
        <List className={classes.list}>
          <ListItem className={classes.inlineBlock}>
            <a href='tel:+441614476638'>
            <h3 className={classes.subtitle}>
              <PhoneIcon fontSize='medium' /> 0161 447 6638
            </h3>
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a href='mailto:info@piccadillymedical.com?Subject=Request%20for%20information' >
              <h3 className={classes.subtitle}>
                <EmailIcon fontSize='medium' /> info@piccadillymedical.com
            </h3>
            </a>
          </ListItem>

        </List>
      </section>

      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              All rights reserved.
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/"
                className={classes.block}
              >
                Picadilly Medical
              </a>
            </ListItem>


          </List>
        </div>

        <div className={classes.right}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href='https://splyntor.ai' target='_blank' className={classes.block}>
                Splyntor Labs</a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Credits />
            </ListItem>

          </List>

        </div>
      </div>

    </footer >
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
