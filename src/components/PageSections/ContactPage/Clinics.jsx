import React from 'react'
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import SvgIcon from '@material-ui/core/SvgIcon'

// core components
import NavPills from 'components/NavPills/NavPills.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'

// Data
import data from 'data/contactData.yml'

// Gatsby
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'components/Image/NonStretchedImage'

// Styles
import defaultPageStyle from 'assets/jss/material-kit-react/pages/defaultPageStyle.jsx'

const BmiIcon = () => (
  <SvgIcon>
    <path d="m 16.2,10.1 0.0,2.9 c 0.0,3.4 0.0,3.6 -0.4,3.7 -0.5,0.1 -0.5,0.1 -0.5,0.4 v 0.3 h 8.3 l -0.0,-0.3 c -0.0,-0.2 -0.1,-0.3 -0.3,-0.4 -0.2,-0.0 -0.4,-0.2 -0.4,-0.3 -0.2,-0.2 -0.2,-9.2 -0.0,-9.5 0.1,-0.1 0.2,-0.2 0.3,-0.2 0.3,-0.0 0.5,-0.2 0.5,-0.4 -0.0,-0.2 -0.2,-0.2 -1.8,-0.2 l -1.8,-0.0 v 0.3 c 0.0,0.2 0.1,0.3 0.3,0.3 0.6,0.1 0.5,-0.1 0.5,5.0 0.0,5.6 0.1,5.1 -1.3,5.1 -0.5,-0.0 -1.0,-0.1 -1.1,-0.1 l -0.2,-0.1 V 11.4 c 0.0,-4.9 -0.0,-5.1 -0.2,-5.4 C 17.8,5.8 17.8,5.8 17.6,5.9 16.1,8.2 15.1,10.1 13.7,12.7 l -0.0,-3.3 c -0.0,-3.2 -0.0,-3.3 -0.2,-3.5 -0.2,-0.1 -0.3,-0.1 -0.4,0.0 -0.1,0.1 -1.1,1.7 -2.1,3.5 C 9.9,11.3 9.0,12.8 9.0,12.8 8.9,12.7 8.9,12.6 8.8,12.4 8.7,11.7 7.7,10.7 6.9,10.5 6.6,10.4 6.6,10.3 6.9,10.1 7.3,10.0 7.6,9.6 7.8,9.1 8.2,8.1 7.7,6.8 6.6,6.3 6.2,6.1 6.0,6.1 3.3,6.1 l -2.9,-0.0 v 0.3 c 0.0,0.2 0.1,0.3 0.3,0.3 0.2,0.0 0.3,0.1 0.4,0.2 0.2,3.5 0.1,5.8 0.1,9.7 L 0.9,16.7 c -0.3,0.1 -0.4,0.2 -0.4,0.4 l -0.0,0.3 H 1.8 3.2 V 6.9 l 0.7,0.0 C 5.1,6.9 5.8,7.4 6.0,8.3 6.1,9.1 5.6,9.9 4.8,10.0 4.4,10.1 4.4,10.1 4.4,10.4 c 0.0,0.3 0.0,0.4 0.3,0.4 1.2,0.3 1.6,0.5 2.0,1.4 0.7,1.6 0.3,3.4 -1.0,4.1 -0.3,0.1 -0.7,0.2 -1.2,0.3 l -0.7,0.1 v 0.4 0.4 l 0.9,-0.0 c 0.9,-0.0 1.9,-0.2 2.5,-0.5 0.9,-0.5 2.0,-2.0 3.6,-5.2 l 0.9,-1.6 0.0,4.0 c 0.0,2.2 0.0,4.0 0.1,4.0 1.6,-2.7 2.8,-4.8 4.5,-7.8 z" />
  </SvgIcon>
)
const SpireIcon = () => (
  <SvgIcon>
    <path d="M 3.1,23.1 C 2.1,22.8 0.6,22.1 0.1,21.6 0.0,21.6 0.3,20.9 0.7,20.1 L 1.4,18.7 3.1,19.6 c 1.4,0.7 1.9,0.9 3.0,0.9 1.5,0.0 2.5,-0.5 3.1,-1.5 C 10.4,17.0 9.3,15.5 5.0,12.8 1.1,10.4 0.1,9.1 0.1,6.3 0.1,2.4 2.5,0.3 6.8,0.3 c 1.9,0.0 4.0,0.5 4.7,1.1 0.2,0.2 0.6,0.0 1.5,-0.4 1.6,-0.8 4.8,-1.0 6.6,-0.4 3.1,0.9 4.8,4.3 3.8,7.6 -0.4,1.4 -2.2,3.1 -5.1,4.8 -3.5,2.1 -4.8,3.7 -4.2,5.3 0.9,2.5 4.5,2.8 7.4,0.7 l 0.6,-0.5 0.3,0.5 c 0.2,0.3 0.5,0.9 0.8,1.4 l 0.5,0.9 -0.9,0.6 c -1.7,1.1 -3.4,1.5 -5.8,1.4 -2.4,-0.1 -3.4,-0.5 -4.6,-1.7 L 11.9,21.2 11.0,22.0 C 10.5,22.5 9.6,23.0 9.1,23.2 7.7,23.7 4.7,23.6 3.1,23.1 Z M 16.1,10.3 C 19.4,8.3 20.5,7.2 20.5,5.9 20.5,3.1 16.3,2.5 12.9,5.0 L 11.9,5.7 11.3,5.2 C 11.0,5.0 10.2,4.5 9.4,4.1 7.0,2.9 4.4,3.3 3.5,4.9 2.6,6.5 3.6,7.9 7.6,10.2 c 1.4,0.8 3.0,1.9 3.5,2.5 l 0.9,0.9 0.7,-0.8 c 0.4,-0.4 2.0,-1.6 3.5,-2.5 z" />
  </SvgIcon>
)

const icons = {
  bmiAlex: BmiIcon,
  bmiHigh: BmiIcon,
  spire: SpireIcon,
}

const ClinicSection = props => {
  const { classes } = props
  const imageClasses = classNames(classes.imgRaised, classes.imgCardTop)

  const imgData = useStaticQuery(graphql`
    query {
      bmiAlex: file(relativePath: { eq: "bmi-alexandra.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            presentationWidth
          }
        }
      }
      bmiHigh: file(relativePath: { eq: "bmi-highfield.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            presentationWidth
          }
        }
      }
      spire: file(relativePath: { eq: "spire-manchester.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            presentationWidth
          }
        }
      }
    }
  `)

  const ClinicTab = props => {
    const [siteKey, site] = props.site
    return (
      <Card plain>
        <CardBody>
          <h3 className={classes.cardTitle}>{site.title}</h3>
          {/* <img className={imageClasses} src={image} /> */}
          <Image
            fluid={imgData[siteKey].childImageSharp.fluid}
            alt={site.title + ', ' + site.town + ', ' + site.county}
            className={imageClasses}
          />
          <h5 className={classes.description}>
            {site.street}, {site.town}, {site.county} {site.postcode}
          </h5>
        </CardBody>
      </Card>
    )
  }

  return (
    <section className={classes.container}>
      <Card plain>
        <CardHeader>
          <h3 className={classes.cardTitle}>Choose your clinic</h3>
          <h5 className={classes.description}>
            {' '}
            Dr. Mowafak Abdelghani can see you at a hospital of your choice at a
            time that suits you.
          </h5>
        </CardHeader>
        <CardBody>
          <NavPills
            color="info"
            tabs={Object.entries(data.clinics).map(e => {
              return {
                tabButton: e[1].tabtitle,
                tabIcon: icons[e[0]],
                tabContent: <ClinicTab site={e} />,
              }
            })}
          />
        </CardBody>
      </Card>
    </section>
  )
}

export default withStyles(defaultPageStyle)(ClinicSection)
