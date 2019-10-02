import React from 'react'
import Layout from 'components/Layouts/DefaultLayout'

import 'assets/scss/material-kit-react.scss?v=1.4.0'
import 'typeface-roboto'
import 'typeface-roboto-slab'

// HeroImage
import heroImage from 'assets/img/bruce-mars-gJtDg6WfMlQ-unsplash-16_9.jpg'

// Sections for this page
import IntroSection from 'components/PageSections/LandingPage/IntroSection'
import TreatmentSection from 'components/PageSections/LandingPage/TreatmentSection'
import TeamSection from 'components/PageSections/LandingPage/TeamSection'
import InsurersSection from 'components/PageSections/Partners/Insurers.jsx'

// SEO
import SEO from 'components/SEO/SEO'
import StructuredData from '../components/SEO/StructuredData'
import ldPicMed from '../data/structuredData/picmed'
import { ldAbdelghani } from '../data/structuredData/people'

export default () => (
  <Layout
    heroImage={heroImage}
    heroTitle="Specialist Pain Management"
    heroSubtitle={
      <>
        From initial assessment to treatment, we aim to provide a multimodal
        approach that utilises the specialised skills of our{' '}
        <strong>multidisciplinary team</strong> led by{' '}
        <strong>Dr. Mowafak Abdelghani</strong>, an expert in the management of
        chronic pain.
      </>
    }
  >
    <SEO title="Home" />
    <StructuredData {...ldPicMed} />
    <StructuredData {...ldAbdelghani} />
    <IntroSection />
    <TreatmentSection />
    <TeamSection />
    <InsurersSection />
  </Layout>
)
