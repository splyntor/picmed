/*eslint-disable*/
import React from 'react'
// react components for routing our app without refresh
import { Link } from 'gatsby'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

// @material-ui/icons
import Home from '@material-ui/icons/HomeOutlined'
import People from '@material-ui/icons/PeopleOutlined'
import Queue from '@material-ui/icons/QueueOutlined'
import Phone from '@material-ui/icons/PhoneOutlined'

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx'

import headerLinksStyle from 'assets/jss/material-kit-react/components/headerLinksStyle.jsx'

function HeaderLinks({ ...props }) {
  const { classes } = props
  // Default Props
  ListItem.defaultProps = {
    className: classes.listItem,
  }

  CustomDropdown.defaultProps = {
    hoverColor: 'info',
    noLiPadding: true,
    buttonProps: {
      className: classes.navLink,
      color: 'transparent',
    },
  }

  Link.defaultProps = { color: 'transparent' }

  return (
    <List className={classes.list}>
      <ListItem>
        <Link to="/" className={classes.navLink}>
          <Home className={classes.icons} />
          Home
        </Link>
      </ListItem>
      {/* <ListItem>
        <CustomDropdown
          buttonText="Our Team"
          buttonIcon={ People }
          dropdownList={ teamMenu() }
        />
      </ListItem> */}

      <ListItem>
        <Link to="/team" className={classes.navLink}>
          <People className={classes.icons} />
          Our Team
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/treatments" className={classes.navLink}>
          <Queue className={classes.icons} />
          Treatments
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/contact" className={classes.navLink}>
          <Phone className={classes.icons} />
          Contact
        </Link>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
