import React from 'react'
import Layout from 'components/Layouts/DefaultLayout'

// Core Components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'

// HeroImage
import heroImage from 'assets/img/marko-pekic-IpLa37Uj2Dw-unsplash.jpg'

// Sections for this page
import ContactForm from 'components/PageSections/ContactPage/ContactForm'
import ClinicSection from 'components/PageSections/ContactPage/Clinics'

// Data
import data from 'data/contactData.yml'

export default () => (
  <Layout
    heroImage={heroImage}
    heroTitle={data.intro.title}
    heroSubtitle={data.intro.content}>
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <ContactForm />
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <ClinicSection />
      </GridItem>

    </GridContainer>
  </Layout>
)
