import {
  title,
  cardTitle,
  grayColor,
  brandBlueColor,
  brandRedColor,
} from 'assets/jss/material-kit-react.jsx'
import imagesStyle from 'assets/jss/material-kit-react/imagesStyles.jsx'

const defaultPageStyle = {
  section: {
    padding: '30px 0',
    textAlign: 'left',
    color: grayColor,

    '& h1,h2,h3': {
      ...title,
      fontSize: '1.2rem',
      marginBottom: '1rem',
      marginTop: '30px',
      minHeight: '32px',
      textDecoration: 'none',
    },
    '& h4,h5': {
      fontSize: '1.313rem',
      maxWidth: '500px',
      margin: '10px auto 0',
    },
    '& p': {
      fontSize: '1rem',
    },
  },

  ...imagesStyle,
}

export default defaultPageStyle
