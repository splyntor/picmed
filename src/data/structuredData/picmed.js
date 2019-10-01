import { ldAbdelghani } from './people'
import { ldPainServices } from './services'

export const ldPicMed = {
  '@type': 'MedicalClinic',
  name: 'Piccadilly Medical',
  description:
    'Piccadilly Medical is the leading chronic pain management service in Manchester helping patients with back pain, arthritis, migraine, neuropathic pain and after surgery.',
  image: 'https://piccadillymedical.com/picmed-logo.png',
  url: 'https://piccadillymedical.com/',
  // "logo": "https://piccadillymedical.com/picmed-logo.png",
  // "mainEntityofPage": "https://piccadillymedical.com/",
  // "availableService": painServices,
  medicalSpecialty: {
    '@type': 'MedicalSpecialty',
    name: 'Pain Medicine',
    alternateName: 'Chronic Pain Medicine',
    sameAs: 'https://en.wikipedia.org/wiki/Pain_management',
  },
  // "legalName": "Piccadilly Medical Ltd",
  founder: ldAbdelghani,
  telephone: '+44-1614476638',
  email: 'info@piccadillymedical.com',
  areaServed: 'United Kingdom',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: '+44-1614476638',
    email: 'info@piccadillymedical.com',
    url: 'https://piccadillymedical.com/contact',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Manchester',
    addressRegion: 'England',
    addressCountry: 'United Kingdom',
  },
}

export default ldPicMed
