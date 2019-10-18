import React from 'react'
import Layout from 'components/Layouts/DefaultLayout'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// HeroImage
import heroImage from 'assets/img/bruce-mars-gJtDg6WfMlQ-unsplash-16_9.jpg'

// gatsby
import { graphql } from 'gatsby'

// SEO
import SEO from 'components/SEO/SEO'
import StructuredData from '../components/SEO/StructuredData'
import ldPicMed from '../data/structuredData/picmed'

// style
import defaultPageStyle from 'assets/jss/material-kit-react/pages/markdownPageStyle.jsx'

const Content = ({ classes, data }) => {
  const { frontmatter, html } = data.markdownRemark
  console.log(classes)
  // const { classes } = props

  return (
    <Layout
      heroImage={heroImage}
      heroTitle={frontmatter.title}
      heroSubtitle={frontmatter.description}
    >
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <StructuredData {...ldPicMed} />
      <section
        className={classes.section}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export default withStyles(defaultPageStyle)(Content)
export const query = graphql`
  {
    markdownRemark(frontmatter: { path: { eq: "/privacypolicy" } }) {
      frontmatter {
        title
        description
        path
      }
      html
    }
  }
`
