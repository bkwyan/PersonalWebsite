import React from 'react';
import {
    ExperienceContentWrapper,
    ExperienceHeader,
    IBMContentWrapper,
    IBMDescriptionWrapper,
    IBMImage,
    IBMImageWrapper,
    IBMTitle,
    IBMHeader, 
    IBMDescription,
} from '../components/styles/ExperienceStyle.js';
import ibmImage from '../images/ibm.png';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const Experience = () => {
    return(
        <ExperienceContentWrapper id='experiences'>
            <ExperienceHeader>Experience</ExperienceHeader>
            <IBMContentWrapper>
                <IBMDescriptionWrapper>
                    <IBMHeader>IBM</IBMHeader>
                    <IBMTitle>Front-End Web Developer</IBMTitle>
                    <IBMDescription>${loremIpsum}</IBMDescription>
                </IBMDescriptionWrapper>
                <IBMImageWrapper>
                    <IBMImage src={ibmImage}/>
                </IBMImageWrapper>
            </IBMContentWrapper>
        </ExperienceContentWrapper>
    )
};

export default Experience;