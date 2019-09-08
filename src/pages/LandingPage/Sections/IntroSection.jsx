import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
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
                                { introData.content.p1 }
                            </h5>
                            <br/>
                            <h5 className={ classes.description }>
                                { introData.content.p2 }
                            </h5>
                        </GridItem>
                    </GridContainer>
                </div>
                <div className={ classes.section }>
                    <GridContainer>
                        <GridItem xs={ 12 } sm={ 4 } md={ 4 }>
                            <img src={ abdelghaniImage } alt="..." className={ imageClasses } />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 8 } md={ 8 }>

                           asdasdasdaasda adasd as adasdas adasd adad
                        </GridItem>
                    </GridContainer>
                </div>
             
            </div>
        );
    }
}

export default withStyles( teamStyle )( IntroSection );
