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
    textAlign: 'center',
  },
  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px auto 0',
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardTitle,
  smallTitle: {
    color: '#6c757d',
  },
  description: {
    fontSize: '1rem',
    color: grayColor,
  },
  justifyCenter: {
    justifyContent: 'center !important',
  },
  socials: {
    marginTop: '0',
    width: '100%',
    transform: 'none',
    left: '0',
    top: '0',
    height: '100%',
    lineHeight: '41px',
    fontSize: '20px',
    color: '#999',
  },
  margin5: {
    margin: '5px',
  },
  insurerImage: {
    // height: '75px',
    maxHeight: '80px',
    width: 'auto',
    // padding: '0 3px',
    margin: '10px 3px 10px',
    display: 'block',
    position: 'relative',
    // '-webkit-transition': 'all 0.4s ease-in',
    transition: 'all 0.4s ease-in',
    '&:hover': {
      borderBottom: '1px solid ' + brandRedColor,
      // filter: 'blur(1px)',
      // '-webkit-filter': 'blur(3px)',
      '-webkit-transform': 'scale(1.2)',
      '-ms-transform': 'scale(1.2)',
      transform: 'scale(1.2)',
    },
  },
  imgZoom: {
    display: 'block',
    position: 'relative',
    '-webkit-transition': 'all 0.5s ease-in',
    transition: 'all 0.5s ease-in',
    '&:hover': {
      borderBottom: '3px solid ' + brandRedColor,
      borderTop: '3px solid ' + brandBlueColor,
      // filter: 'blur(1px)',
      // '-webkit-filter': 'blur(3px)',
      '-webkit-transform': 'scale(0.95)',
      '-ms-transform': 'scale(0.95)',
      transform: 'scale(0.95)',
    },
  },
}

export default defaultPageStyle
