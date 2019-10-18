import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import infoStyle from 'assets/jss/material-kit-react/components/infoStyle.jsx'

// Iconify Component
import { Icon, InlineIcon } from '@iconify/react'

// Colors
import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title,
} from 'assets/jss/material-kit-react.jsx'

const colorMap = {
  primary: primaryColor,
  warning: warningColor,
  danger: dangerColor,
  success: successColor,
  info: infoColor,
  rose: roseColor,
  gray: grayColor,
}

function InfoAreaIconify({ ...props }) {
  const {
    classes,
    title,
    description,
    icon,
    iconColor,
    iconWidth,
    iconHeight,
    vertical,
  } = props
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical,
  })
  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper}>
        <Icon
          icon={icon}
          color={colorMap[iconColor]}
          width={iconWidth}
          height={iconHeight}
        />
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  )
}

InfoAreaIconify.defaultProps = {
  iconColor: 'gray',
  iconWidth: 61,
  iconHeight: 61,
}

InfoAreaIconify.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.any.isRequired,
  iconColor: PropTypes.oneOf([
    'primary',
    'warning',
    'danger',
    'success',
    'info',
    'rose',
    'gray',
  ]),
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  vertical: PropTypes.bool,
}

export default withStyles(infoStyle)(InfoAreaIconify)
