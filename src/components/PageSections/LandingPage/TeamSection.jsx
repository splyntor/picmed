import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'

// Gatsby
import { Link } from 'gatsby'

// Images
import kurkarImage from 'assets/img/team/kurkar.jpg'
import loughheadImage from 'assets/img/team/loughhead.jpg'
import emmaImage from 'assets/img/team/emma.jpg'

// YAML data
import teamData from 'data/teamData.yml'

// style
import defaultPageStyle from 'assets/jss/material-kit-react/pages/defaultPageStyle.jsx'
class TeamSection extends React.Component {
  render() {
    const { classes } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )

    return (
      <div className={classes.section}>
        <Link to="/team">
          <h2 className={classes.title}>Our Team</h2>
        </Link>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Link to="/team">
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={kurkarImage} alt="..." className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    {teamData.kurkar.title} {teamData.kurkar.fname}{' '}
                    {teamData.kurkar.sname}
                    <br />
                    <small className={classes.smallTitle}>
                      {teamData.kurkar.role}
                    </small>
                  </h4>
                  <CardBody>
                    <p className={classes.description}>
                      {teamData.kurkar.blurb}
                    </p>
                  </CardBody>
                </Card>
              </Link>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img
                    src={loughheadImage}
                    alt="..."
                    className={imageClasses}
                  />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  {teamData.loughhead.title} {teamData.loughhead.fname}{' '}
                  {teamData.loughhead.sname}
                  <br />
                  <small className={classes.smallTitle}>
                    {teamData.loughhead.role}
                  </small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    {teamData.loughhead.blurb}
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={emmaImage} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  {teamData.emma.title} {teamData.emma.fname}{' '}
                  {teamData.emma.sname}
                  <br />
                  <small className={classes.smallTitle}>
                    {teamData.emma.role}
                  </small>
                </h4>
                <CardBody>
                  <p className={classes.description}>{teamData.emma.blurb}</p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(defaultPageStyle)(TeamSection)
