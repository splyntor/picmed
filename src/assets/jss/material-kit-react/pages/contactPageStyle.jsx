import { container } from 'assets/jss/material-kit-react.jsx'
import { title, cardTitle, grayColor } from 'assets/jss/material-kit-react.jsx'
import imagesStyle from 'assets/jss/material-kit-react/imagesStyles.jsx'


const contactPageStyle = {
  cardHidden: {
    opacity: '0',
    transform: 'translate3d(0, -60px, 0)',
  },
  
  form: {
    margin: '0',
    border: '0',
  },

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

}

export default contactPageStyle
