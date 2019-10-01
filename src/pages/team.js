import React from 'react'
import Layout from 'components/Layouts/DefaultLayout'

import 'assets/scss/material-kit-react.scss?v=1.4.0'
import 'typeface-roboto'
import 'typeface-roboto-slab'
// Core Components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
// HeroImage
import heroImage from 'assets/img/team/abdelghani-tie-h.jpg'

// Sections for this page
import AbdelghaniSection from 'components/PageSections/TeamPage/AbdelghaniSection'
import ProfileCard from '../components/PageSections/TeamPage/ProfileCard'

// Profle Images
import emmaProfileImage from 'assets/img/team/emma.jpg'
import loughheadProfileImage from 'assets/img/team/loughhead.jpg'
import kurkarProfileImage from 'assets/img/team/kurkar.jpg'

// Data
import teamData from 'data/teamData.yml'

// SEO
import SEO from 'components/SEO/SEO'
import StructuredData from '../components/SEO/StructuredData'
import ldPicMed from '../data/structuredData/picmed'
import {
  ldAbdelghani,
  ldKurkar,
  ldLoughhead,
} from '../data/structuredData/people'

export default () => (
  <Layout
    heroImage={heroImage}
    heroTitle="Our Specialist Team"
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
    <SEO title="Specialists" />
    <StructuredData {...ldPicMed} />
    <StructuredData {...ldAbdelghani} />
    <StructuredData {...ldKurkar} />
    <StructuredData {...ldLoughhead} />

    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <AbdelghaniSection />
      </GridItem>
    </GridContainer>
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={6}>
        <ProfileCard
          id={teamData.kurkar.sname}
          title={
            <>
              {teamData.kurkar.title} {teamData.kurkar.fname}{' '}
              {teamData.kurkar.sname}
            </>
          }
          subtitle={teamData.kurkar.qualifications}
          content={<>{teamData.kurkar.content}</>}
          profileImage={kurkarProfileImage}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <ProfileCard
          id={teamData.loughhead.sname}
          title={
            <>
              {teamData.loughhead.title} {teamData.loughhead.fname}{' '}
              {teamData.loughhead.sname}
            </>
          }
          subtitle={teamData.loughhead.qualifications}
          content={<>{teamData.loughhead.content}</>}
          profileImage={loughheadProfileImage}
        />
      </GridItem>
    </GridContainer>
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={6}>
        <ProfileCard
          id={teamData.emma.fname}
          title={
            <>
              {teamData.emma.title} {teamData.emma.fname} {teamData.emma.sname}
            </>
          }
          content={<>{teamData.emma.content}</>}
          profileImage={emmaProfileImage}
        />
      </GridItem>
    </GridContainer>
  </Layout>
)
