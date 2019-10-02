import React from 'react'
import Layout from 'components/Layouts/DefaultLayout'

// HeroImage
// import heroImage from 'assets/img/mohamed-nohassi-odxB5oIG_iA-unsplash.jpg'
import heroImage from 'assets/img/team/abdelghani-scrubs.jpg'

// Sections for this page
import SimpleSection from 'components/PageSections/TreatmentsPage/SimpleSection'
import XraySection from 'components/PageSections/TreatmentsPage/XraySection'
import UltrasoundSection from 'components/PageSections/TreatmentsPage/UltrasoundSection'

// SEO
import SEO from 'components/SEO/SEO'
import StructuredData from '../components/SEO/StructuredData'
import ldPicMed from '../data/structuredData/picmed'
import { ldAbdelghani } from '../data/structuredData/people'
import { ldPainServices } from '../data/structuredData/services'

export default () => (
  <Layout
    heroImage={heroImage}
    heroTitle={'Personalised Treatment Plans'}
    heroSubtitle={
      <>
        At Picadilly Medical, <strong>Dr. Mowafak Abdelghani</strong> and his
        team are able to offer a variety of services ranging from simple
        treatments to more complex, x-ray and ultrasound-guided procedures
        targeted at the different causes of pain.
      </>
    }
  >
    <SEO
      title="Treatments"
      description="At Picadilly Medical, Dr. Mowafak Abdelghani can treat
       chronic pain using simple procedures as well as complex, x-ray/
       ultrasound-guided procedures."
    />
    <StructuredData {...ldPicMed} />
    <StructuredData {...ldAbdelghani} />
    {ldPainServices.map(e => (
      <StructuredData {...e} />
    ))}

    <XraySection />
    <UltrasoundSection />
    <SimpleSection />
  </Layout>
)
