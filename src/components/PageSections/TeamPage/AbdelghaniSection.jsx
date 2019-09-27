import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'



// Style
import defaultPageStyle from 'assets/jss/material-kit-react/pages/defaultPageStyle.jsx'

const ProfileSection = props => {
  const { classes } = props

  return (
    <>
      <section className={classes.section}>
        <Card plain>
          <CardHeader>
            <h1 className={classes.title}>Dr. Mowafak Abdelghani</h1>
            <h3 className={classes.cardSubtitle}>
              MBBCH, MSc, FRCA, MD, FFPMRCA
              <br />
              <small>
                Dr Mowafak Abdelghani is the founder and lead physician at
                Piccadilly Medical. He is also the Clinical Lead for Chronic
                Pain Services at the Manchester Royal Infirmary, Trafford
                General Hospital and Altrincham General Hospital and a
                Consultant in Pain Medicine and Anaesthesia at Manchester
                University Hospital NHS Foundation Trust.
              </small>
            </h3>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <p className={classes.description}>
                  His undergraduate and initial postgraduate training in
                  medicine and anaesthesia was undertaken at one of the largest
                  and most historic teaching hospitals, Ain-Shams University in
                  Cairo, Egpyt. One of the youngest graduates in the history of
                  his medical school, Dr Abdelghani showed distinction at the
                  very onset of his medical career. In 2002 he was awarded a
                  Master of Science in Anaesthetics from what is still regarded
                  today as one of Egypt's gold standard medical schools.
                </p>
                <p className={classes.description}>
                  These early years of medical training exposed Dr Abdelghani to
                  a wide range of medical pahtology but more importantly
                  instilled the virtues of diversity, multiethnicity and culture
                  into his everyday clinical practice. Well revered amongst his
                  colleagues and just as likely to be remembered by his patients
                  for both his clinical acumen and skill, as well as his
                  empathic understanding and comforting consultantion manner, Dr
                  Abdelghani was soon acheiving excellent results empowered by
                  his will to bring Central Manchester Foundation Trust to the
                  forefront of Pain Medicine.
                </p>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <p className={classes.description}>
                  After graduating from Medical School in Cairo, Egypt and
                  completing his Masters of Science and a 4 year training
                  rotation in Ain-Shams University, Cairo he Relocated to the UK
                  where he rotated in Training posts around North Wales, Mersey
                  and Surrey. He joined the Northwest Training Rotation as a
                  Specialist Trainee and Completed the five year training
                  Program. His last year of training was spent at the Imperial
                  school in London, specifically in the Chelsea and Westminster
                  Hospital where he completed his Advanced Pain training in a
                  twelve month program.
                </p>
                <p className={classes.description}>
                  He is a Fellow of the Royal College of Anaesthetists and a
                  Fellow of the Faculty of Pain Medicine by examination. He has
                  published chapters on multiple topics of Pain Medicine in 2
                  books published in the UK and the USA. He has a well
                  established interest and role in post-graduate education and
                  healthcare management. He chairs the North West Pain Group ,
                  which holds regular monthly meetings for Pain Medicine
                  Consultants in the North West Region.
                </p>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </section>
    </>
  )
}

export default withStyles(defaultPageStyle)(ProfileSection)
