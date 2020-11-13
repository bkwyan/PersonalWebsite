import React from 'react';
import Tilt from 'react-tilt';
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
            <ProfilePictureWrapper>
                <Tilt options={{ max:25, scale: 1.05}}>
                    <ProfilePicture src ={portrait} />
                </Tilt>
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