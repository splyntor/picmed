/*eslint-disable*/
import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import IconButton from '@material-ui/core/IconButton'

// Components for this page
import Credits from 'components/Credits/Credits.jsx'
import Insurers from 'components/PageSections/Partners/Insurers.jsx'
// @material-ui/icons
import PhoneIcon from '@material-ui/icons/PhoneInTalk'
import EmailIcon from '@material-ui/icons/EmailOutlined'
import ContactSupportIcon from '@material-ui/icons/ContactSupport'

// Style
import footerStyle from 'assets/jss/material-kit-react/components/footerStyle.jsx'

// Gatsby
import { Link } from 'gatsby'

// Data
import data from 'data/siteMetaData.yml'

function Footer({ ...props }) {
  const { classes, whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  return (
    <footer className={footerClasses}>
      <section>
        <Link to="/contact">
          <h2 className={classes.title}>Book an appointment</h2>
        </Link>
        <List className={classes.list}>
          <ListItem className={classes.inlineBlock}>
            <a href={'tel:' + data.contact.phone.replace(/ /g, '')}>
              <h3 className={classes.subtitle}>
                {/* <PhoneIcon fontSize='medium' /> */}
                {data.contact.phone}
              </h3>
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a
              href={
                'mailto:' +
                data.contact.email +
                '?subject=' +
                encodeURI(data.contact.emailSubject)
              }
            >
              <h3 className={classes.subtitle}>
                {/* <EmailIcon fontSize='medium' /> */}
                {data.contact.email}
              </h3>
            </a>
          </ListItem>

          <ListItem className={classes.inlineBlock}>
            <IconButton href="/contact">
              <ContactSupportIcon fontSize="large" />
            </IconButton>
          </ListItem>
        </List>
      </section>

      <div className={classes.container}>
        {/* <div className={classes.left}> */}
        <List className={classes.list}>
          <ListItem className={classes.inlineBlock}>
            <a href="/" className={classes.block}>
              {data.title}
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            All rights reserved.
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a
              href="https://splyntor.ai"
              target="_blank"
              className={classes.block}
            >
              Website by Splyntor Labs
            </a>
          </ListItem>
        </List>
        {/* </div> */}

        {/* <div className={classes.right}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href='https://splyntor.ai' target='_blank' className={classes.block}>
                Splyntor Labs</a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Credits />
            </ListItem>

          </List>

        </div> */}
      </div>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool,
}

export default withStyles(footerStyle)(Footer)
