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
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'components/Image/NonStretchedImage'

// YAML data
import teamData from 'data/teamData.yml'

// style
import defaultPageStyle from 'assets/jss/material-kit-react/pages/defaultPageStyle.jsx'

const TeamSection = props => {
  const { classes } = props
  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle)

  const imgData = useStaticQuery(graphql`
    query {
      kurkar: file(relativePath: { eq: "team/kurkar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            presentationWidth
          }
        }
      }
      loughhead: file(relativePath: { eq: "team/loughhead.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            presentationWidth
          }
        }
      }
      emma: file(relativePath: { eq: "team/emma.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            presentationWidth
          }
        }
      }
    }
  `)

  const kurkarName =
    teamData.kurkar.title +
    ' ' +
    teamData.kurkar.fname +
    ' ' +
    teamData.kurkar.sname
  const emmaName =
    teamData.emma.title ||
    '' + ' ' + teamData.emma.fname + ' ' + teamData.emma.sname
  const loughheadName =
    teamData.loughhead.title ||
    '' + ' ' + teamData.loughhead.fname + ' ' + teamData.loughhead.sname
  return (
    <div className={classes.section}>
      <Link to="/team">
        <h2 className={classes.title}>Our Team</h2>
      </Link>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Link to={'/team#' + teamData.kurkar.sname}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <Image
                    fluid={imgData.kurkar.childImageSharp.fluid}
                    alt={kurkarName}
                    className={imageClasses}
                  />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  {kurkarName}
                  <br />
                  <small className={classes.smallTitle}>
                    {teamData.kurkar.role}
                  </small>
                </h4>
                <CardBody>
                  <p className={classes.description}>{teamData.kurkar.blurb}</p>
                </CardBody>
              </Card>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Link to={'/team#' + teamData.loughhead.sname}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <Image
                    fluid={imgData.loughhead.childImageSharp.fluid}
                    alt={loughheadName}
                    className={imageClasses}
                  />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  {loughheadName}
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
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Link to={'/team#' + teamData.emma.fname}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <Image
                    fluid={imgData.emma.childImageSharp.fluid}
                    alt={emmaName}
                    className={imageClasses}
                  />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  {emmaName}
                  <br />
                  <small className={classes.smallTitle}>
                    {teamData.emma.role}
                  </small>
                </h4>
                <CardBody>
                  <p className={classes.description}>{teamData.emma.blurb}</p>
                </CardBody>
              </Card>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}

export default withStyles(defaultPageStyle)(TeamSection)
