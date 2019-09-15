/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Home, People, PeopleOutline, Queue, Phone } from "@material-ui/icons";

// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";



function HeaderLinks ( { ...props } )
{
  const { classes } = props;
  // Default Props
  ListItem.defaultProps = {
    className: classes.listItem
  }

  CustomDropdown.defaultProps = {
    hoverColor: 'info',
    noLiPadding: true,
    buttonProps: {
      className: classes.navLink,
      color: "transparent"
    }
  }

  Link.defaultProps = { color: 'transparent' }



  const teamMenu = () => (
    [
      <Link to='/' children='Dr. Mowafak Abdelghani' className={ classes.dropdownLink } />,
      <Link to='/' children='Dr. Michael Kurkar' className={ classes.dropdownLink } />,
      <Link to='/' children='Debbie Loughhead' className={ classes.dropdownLink } />
    ]
  )

  const treatmentMenu = () => (
    [
      <Link to='/' children='Pharmacological' className={ classes.dropdownLink } />,
      <Link to='/' children='Procedures' className={ classes.dropdownLink } />,
      <Link to='/' children='Psychological Therapy' className={ classes.dropdownLink } />,
      <Link to='/' children='Physical Therapy' className={ classes.dropdownLink } />
    ]
  )

  const contactMenu = () => (
    [
      <Link to='/' children='Request Appointment' className={ classes.dropdownLink } />,
      <Link to='/' children='Make a referral' className={ classes.dropdownLink } />,
      <Link to='/' children='Clinics' className={ classes.dropdownLink } />,
    ]
  )


  return (
    <List className={ classes.list }>
      <ListItem>
        <Link to='/' className={ classes.navLink }>
          <Home className={ classes.icons } />Home
        </Link>
      </ListItem>
      <ListItem>
        <CustomDropdown
          buttonText="Our Team"
          buttonIcon={ People }
          dropdownList={ teamMenu() }
        />
      </ListItem>
      {/* <ListItem>
        <CustomDropdown
          buttonText="Treatments"
          buttonIcon={ Queue }
          dropdownList={ treatmentMenu() }
        />
      </ListItem> */}
      <ListItem>
        <Link to='/treatments' className={ classes.navLink }>
          <Queue className={ classes.icons } />Treatments
        </Link>
      </ListItem>
      <ListItem>
      <Link to='/contact' className={ classes.navLink }>
          <Phone className={ classes.icons } />Contact
        </Link>
      </ListItem>

    </List>
  );
}

export default withStyles( headerLinksStyle )( HeaderLinks );
