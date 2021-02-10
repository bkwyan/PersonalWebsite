import React from 'react';
import Tilt from 'react-tilt';
import {
    ProfilePicture,
    ProfilePictureWrapper,
    HomeContentWrapper,
    NameWrapper,
    Name,
    DescriptionWrapper,
    Description
} from '../components/styles/HomeStyle.js';
import portrait from '../images/portrait.jpg';

const Home = () => {
    return(
        <HomeContentWrapper id='home'>
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
        </HomeContentWrapper>
    )
};

export default Home;