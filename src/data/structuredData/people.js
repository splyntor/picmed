import { ldMFT, ldAinShams, ldGMC, ldRCOA } from './org'
// import {painConditions} from './conditions'

// Profle Images
import AbdelGhaniImage from 'assets/img/team/abdelghani-tie.jpg'
import emmaProfileImage from 'assets/img/team/emma.jpg'
import loughheadProfileImage from 'assets/img/team/loughhead.jpg'
import kurkarProfileImage from 'assets/img/team/kurkar.jpg'

export const ldAbdelghani = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr. Mowafak Abdelghani',
  givenName: 'Mowafak',
  familyName: 'Abdelghani',
  gender: 'Male',
  sameAs: [
    'https://uk.linkedin.com/in/mowafak-abdelghani-1003433b',
    'https://www.bmihealthcare.co.uk/consultants/mowafak-abdelghani',
    'https://finder.bupa.co.uk/Consultant/view/238590/dr_mowafak_abdelghani',
  ],
  image: AbdelGhaniImage,
  telephone: '+44-1614476638',
  email: 'info@picaddillymedical.com',
  affiliation: [ldMFT],
  alumniOf: [ldAinShams],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'MBChB',
      credentialCategory: 'degree',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'FRCA',
      credentialCategory: 'degree',
    },
  ],
  jobTitle: [
    'Lead for Chronic Pain Services',
    'Consultant in Pain Medicine and Anaesthesia',
  ],
  worksFor: ldMFT,
  // "memberOf": [gmc, rcoa],
  // "knowsAbout": painConditions
}

export const ldKurkar = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  givenName: 'Michael',
  familyName: 'Kurkar',
  gender: 'Male',
  image: kurkarProfileImage,
  sameAs: ['https://uk.linkedin.com/in/micheal-kurkar-53856945'],
  jobTitle: 'Consultant in Adult Psychiatry',
}

export const ldLoughhead = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  givenName: 'Debbie',
  familyName: 'Loughhead',
  gender: 'Female',
  image: loughheadProfileImage,
  sameAs: ['https://uk.linkedin.com/in/debbie-loughhead-18602892'],
  jobTitle: 'Physiotherapist',
}
