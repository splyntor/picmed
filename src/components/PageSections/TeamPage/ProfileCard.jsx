import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'

import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'
// Images
// import profileImage from 'assets/img/team/emma.jpg'

// Style
import defaultPageStyle from 'assets/jss/material-kit-react/pages/defaultPageStyle.jsx'

const ProfileSection = props => {
  const { classes, id, title, subtitle, content, profileImage } = props
  const imageClasses = classNames(
    classes.imgRaised,
    // classes.imgRounded,
    classes.imgFluid,
    classes.imgCardTop
  )
  return (
    // <>
    <section className={classes.section} id={id}>
      <Card plain>
        <CardHeader>
          <h3 className={classes.cardTitle}>{title}</h3>
          <h5 className={classes.cardSubtitle}>{subtitle}</h5>
        </CardHeader>

        <CardBody>
          <img src={profileImage} alt="..." className={imageClasses} />
          <h5 className={classes.description}>{content}</h5>
        </CardBody>
      </Card>
    </section>
    // </>
  )
}

export default withStyles(defaultPageStyle)(ProfileSection)
