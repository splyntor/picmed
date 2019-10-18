import React from 'react'
import { Helmet } from 'react-helmet'
import ldPicMed from 'data/structuredData/picmed'

function withContext(e) {
  if (e) {
    let d = { ...e }
    d['@context'] = 'https://schema.org'
    return d
  }
}

const StructuredData = props => {
  if (Object.entries(props).length) {
    return (
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(withContext(props))}
        </script>
      </Helmet>
    )
  } else {
    return (
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(withContext(ldPicMed))}
        </script>
      </Helmet>
    )
  }
}

export default StructuredData
