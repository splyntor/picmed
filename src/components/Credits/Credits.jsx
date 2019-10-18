import React from 'react'
// material-ui components
import withStyles from '@material-ui/core/styles/withStyles'

import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'

// @material-ui/icons
import Close from '@material-ui/icons/Close'
// core components
import Button from 'components/CustomButtons/Button.jsx'
import CreditsContent from './CreditsContent'
import modalStyle from 'assets/jss/material-kit-react/modalStyle.jsx'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />
})

const Modal = props => {
  const [modal, setModal] = React.useState(false)
  const classes = props
  return (
    <>
      <Button color="transparent" simple onClick={() => setModal(true)}>
        Credits and Licenses
      </Button>

      <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal,
        }}
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setModal(false)}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setModal(false)}
          >
            <Close className={classes.modalClose} />
          </IconButton>
          <h4 className={classes.modalTitle}>Licenses and Credits</h4>
        </DialogTitle>
        <DialogContent
          id="modal-slide-description"
          className={classes.modalBody}
        >
          <CreditsContent />

          <h5>The following need to be credited.</h5>
        </DialogContent>
        <DialogActions
          className={classes.modalFooter + ' ' + classes.modalFooterCenter}
        >
          <Button onClick={() => setModal(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default withStyles(modalStyle)(Modal)
