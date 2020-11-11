import React from 'react';
import NavBar from '../components/NavBar.js';
import {
    ProfilePicture,
    ProfilePictureWrapper,
    MainContentWrapper,
    NameWrapper,
    Name,
    DescriptionWrapper,
    Description
} from '../components/styles/HomeStyle.js';
import portrait from '../images/portrait.jpg';

const Home = () => {
    return(
        <MainContentWrapper>
            <NavBar />
            <ProfilePictureWrapper>
                <ProfilePicture src ={portrait} />
            </ProfilePictureWrapper>
            <NameWrapper>
                <Name>Brandon Yan</Name>
            </NameWrapper>
            <DescriptionWrapper>
                <Description>Software Engineer at Western University</Description>
            </DescriptionWrapper>
        </MainContentWrapper>
    )
};

export default Home;