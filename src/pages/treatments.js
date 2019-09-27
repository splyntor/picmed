import React from 'react'
import Layout from 'components/Layouts/DefaultLayout'

// HeroImage
// import heroImage from 'assets/img/mohamed-nohassi-odxB5oIG_iA-unsplash.jpg'
import heroImage from 'assets/img/team/abdelghani-scrubs.jpg'

// Sections for this page
import SimpleSection from 'components/PageSections/TreatmentsPage/SimpleSection'
import XraySection from 'components/PageSections/TreatmentsPage/XraySection'
import UltrasoundSection from 'components/PageSections/TreatmentsPage/UltrasoundSection'

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
    <XraySection />
    <UltrasoundSection />
    <SimpleSection />
  </Layout>
)
