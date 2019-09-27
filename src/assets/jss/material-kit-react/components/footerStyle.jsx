import {
  container,
  brandBlueColor,
  brandRedColor,
  brandGreyColor,
} from 'assets/jss/material-kit-react.jsx'
import { title, cardTitle, grayColor } from 'assets/jss/material-kit-react.jsx'

const footerStyle = {
  block: {
    color: 'inherit',
    padding: '0.9375rem',
    fontWeight: '500',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    textDecoration: 'none',
    position: 'relative',
    display: 'block',
  },
  left: {
    float: 'left!important',
    display: 'block',
  },
  right: {
    padding: '15px 0',
    margin: '0',
    float: 'right!important',
  },
  footer: {
    padding: '0.9375rem 0',
    textAlign: 'center',
    display: 'block',
    zIndex: '2',
    position: 'relative',

    // backgroundColor: '#50abff',
  },
  credits: {
    display: 'flex',
  },
  footerContact: {
    display: 'block',
    marginTop: '10px',
    marginBottom: '10px',
    textAlign: 'center',
    justifyContent: 'center !important',
  },
  title: {
    ...title,
    color: brandRedColor,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
    textTransform: 'none',
  },
  subtitle: {
    ...title,
    // fontSize: '1.513rem',
    // maxWidth: '500px',
    fontWeight: '600',
    margin: '10px auto 0',
    color: brandGreyColor,
  },
  a: {
    color: brandBlueColor,
    textDecoration: 'none',
    backgroundColor: 'transparent',
  },
  footerWhiteFont: {
    '&,&:hover,&:focus': {
      color: '#FFFFFF',
    },
  },
  container,
  list: {
    marginBottom: '0',
    padding: '0',
    marginTop: '0',
  },
  inlineBlock: {
    display: 'inline-block',
    padding: '10px',
    width: 'auto',
  },
  icon: {
    width: '18px',
    height: '18px',
    position: 'relative',
    top: '3px',
  },
}
export default footerStyle
