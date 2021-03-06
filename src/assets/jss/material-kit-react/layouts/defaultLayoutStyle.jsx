import { container, title, mainRaised } from 'assets/jss/material-kit-react.jsx'

const defaultLayoutStyle = {
  container: {
    zIndex: '12',
    color: '#FFFFFF',
    ...container,
  },
  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    color: '#FFFFFF',
    textDecoration: 'none',
  },
  subtitle: {
    fontSize: '1.213rem',
    maxWidth: '500px',
    margin: '50px auto 0',
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
  },
  mainRaised: {
    ...mainRaised,
  },
}

export default defaultLayoutStyle
