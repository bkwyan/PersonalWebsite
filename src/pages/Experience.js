import React from 'react';
import Tilt from 'react-tilt';
import {
    ExperienceContentWrapper,
    ExperienceHeader,
    IBMContentWrapper,
    IBMDescriptionWrapper,
    IBMImageWrapper,
} from '../components/styles/ExperienceStyle.js';

const Experience = () => {
    return(
        <ExperienceContentWrapper>
            <ExperienceHeader>Experience</ExperienceHeader>
            <IBMContentWrapper>
                <IBMDescriptionWrapper/>
                
                <IBMImageWrapper/>
            </IBMContentWrapper>
        </ExperienceContentWrapper>
    )
};

export default Experience;