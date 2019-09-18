import { 
  container,
  
   title,
    mainRaised,
  grayColor } from 'assets/jss/material-kit-react.jsx'

const userPageStyle = {
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
    color: grayColor,
    textDecoration: 'none',
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px auto 0',
    color: grayColor,
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
  },
  mainRaised: {
    ...mainRaised,
  },
  description: {
    color: grayColor
    
  },
}

export default userPageStyle
