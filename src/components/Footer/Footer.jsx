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

// credits
// import Credits from '../Credits/Credits'

// icons
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
              <h3 className={classes.subtitle}>{data.contact.phone}</h3>
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
              <h3 className={classes.subtitle}>{data.contact.email}</h3>
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
          {/* <ListItem className={classes.inlineBlock}>
          <Link 
              to='/'
              children={data.title}
              className={classes.block}
            />
          </ListItem> */}
          <ListItem className={classes.inlineBlock}>
            <p className={classes.block}>&copy; 2019 All rights reserved.</p>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <Link
              to="/privacypolicy"
              children="Privacy Policy"
              className={classes.block}
            />
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

          {/* <ListItem className={classes.inlineBlock}>
            <Credits />
          </ListItem> */}
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
