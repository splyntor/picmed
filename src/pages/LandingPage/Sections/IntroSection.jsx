import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import { Divider } from "@material-ui/core"
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import treatmentStyle from "assets/jss/material-kit-react/views/landingPageSections/treatmentStyle.jsx";
import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// YAML data
import introData from 'data/introData.yml'
import teamData from 'data/teamData.yml'
// Images
import abdelghaniImage from "assets/img/team/abdelghani-tie.jpg";

class IntroSection extends React.Component
{
    render ()
    {
        const { classes } = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );

        return (
            <div>
                <div className={ classes.section }>
                    <GridContainer justify="center">
                        <GridItem xs={ 12 } sm={ 12 } md={ 8 }>
                            <h2 className={ classes.title }>
                                { introData.title }

                            </h2>
                            <h5 className={ classes.description }>
                                { introData.description.p1 }
                            </h5>
                            <br />
                            <h5 className={ classes.description }>
                                { introData.description.p2 }
                            </h5>
                        </GridItem>
                    </GridContainer>
                    <Divider
                        light
                        variant="fullWidth"
                    />
                </div>
                <div className={ classes.section }>
                   

                    <GridContainer justify="center">
                        <GridItem xs={ 12 } sm={ 6 } md={ 4 }>
                            <img src={ abdelghaniImage } alt="..." className={ imageClasses } />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 6 } md={ 8 }>
                            <h5 className={ classes.title }>
                                { introData.abdelghani.title }

                            </h5>
                            <h5 className={ classes.description }>
                                { introData.abdelghani.description }
                            </h5>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>


        );
    }
}

export default withStyles( teamStyle )( IntroSection );
