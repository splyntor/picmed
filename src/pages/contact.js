import React from 'react'
import Layout from 'components/Layouts/DefaultLayout'

// Core Components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'

// HeroImage
import heroImage from 'assets/img/marko-pekic-IpLa37Uj2Dw-unsplash.jpg'

// Sections for this page
import ContactIntroSection from 'components/PageSections/ContactPage/ContactIntroSection'
import ContactForm from 'components/PageSections/ContactPage/ContactForm'
import ClinicSection from 'components/PageSections/ContactPage/Clinics'

// Data
import data from 'data/contactData.yml'

// SEO
import SEO from 'components/SEO/SEO'
import StructuredData from '../components/SEO/StructuredData'
import ldPicMed from '../data/structuredData/picmed'

export default () => (
  <Layout
    heroImage={heroImage}
    heroTitle={data.intro.title}
    heroSubtitle={data.intro.content}
  >
    <SEO
      title="Contact"
      description="Contact our experienced admin team at Piccadilly Medical to make
      an appointment with Dr. Mowafak Abdelghani at a clinic of your choice."
    />
    <StructuredData />
    <ContactIntroSection />
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
