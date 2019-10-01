import React from 'react'

// Core components
import IconButton from '@material-ui/core/IconButton'

// Icons
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/EmailOutlined'

// Data
import data from 'data/siteMetaData.yml'
export const PhoneIconButton = props => {
  const { className, ...rest } = props
  return (
    <IconButton className={className} href={'tel:' + data.contact.phone}>
      <PhoneIcon />
    </IconButton>
  )
}

export const EmailIconButton = props => {
  const { className, ...rest } = props
  return (
    <IconButton
      className={className}
      href={
        'mailto:' + data.contact.email + '?subject=' + data.contact.emailSubject
      }
    >
      <EmailIcon />
    </IconButton>
  )
}
