import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'

// Gatsby
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'components/Image/NonStretchedImage'

// Style

import defaultPageStyle from 'assets/jss/material-kit-react/pages/defaultPageStyle.jsx'

const InsurersList = props => {
  const { classes } = props
  const imageClasses = classNames(classes.insurerImage)
  const imgData = useStaticQuery(graphql`
    query {
      allianz: file(relativePath: { eq: "partners/allianz.png" }) {
        childImageSharp {
          fluid(maxHeight: 80, maxWidth: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      aviva: file(relativePath: { eq: "partners/aviva.png" }) {
        childImageSharp {
          fluid(maxHeight: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      bupa: file(relativePath: { eq: "partners/bupa.png" }) {
        childImageSharp {
          fluid(maxHeight: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      cigna: file(relativePath: { eq: "partners/cigna.png" }) {
        childImageSharp {
          fluid(maxHeight: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      vitality: file(relativePath: { eq: "partners/vitality.png" }) {
        childImageSharp {
          fluid(maxHeight: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      wpa: file(relativePath: { eq: "partners/wpa.png" }) {
        childImageSharp {
          fluid(maxHeight: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
    }
  `)

  const tileData = [
    {
      title: 'Aviva Health Insurance',
      img: imgData.aviva.childImageSharp.fluid,
      url: 'https://www.aviva.co.uk/health/health-products/',
    },
    {
      title: 'BUPA Health Insurance',
      img: imgData.bupa.childImageSharp.fluid,
      url: 'https://www.bupa.co.uk/health/health-insurance',
    },
    {
      title: 'CIGNA',
      img: imgData.cigna.childImageSharp.fluid,
      url: 'https://www.cigna.co.uk/',
    },
    {
      title: 'Vitality',
      img: imgData.vitality.childImageSharp.fluid,
      url: 'https://www.vitality.co.uk/',
    },
    {
      title: 'WPA',
      img: imgData.wpa.childImageSharp.fluid,
      url: 'https://www.wpa.org.uk/',
    },
    {
      title: 'Allianz Healthcare',
      img: imgData.allianz.childImageSharp.fluid,
      url: 'https://www.allianzcare.com/en.html',
    },
  ]

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Covered by all major insurers</h2>
      <GridContainer justify="center">
        {tileData.map(tile => (
          <GridItem key={tile.title.toLowerCase().replace(' ','-')} xs={2}>
            <a href={tile.url}>
              <Image
                fluid={tile.img}
                alt={tile.title}
                className={imageClasses}
                title={tile.title}
              />
            </a>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  )
}

export default withStyles(defaultPageStyle)(InsurersList)
