import React from 'react';
import Tilt from 'react-tilt';
import {
    HomeContainer,
    HomeWrapper,
    VideoContainer,
    VideoBackground,
    ProfilePictureWrapper,
    ProfilePicture,
    ContentWrapper,
    Name,
    Description,
    Blurb
} from '../components/styles/HomeStyle.js';
import portrait from '../images/portrait.jpg';
import Video from '../videos/video.mp4';

const Home = () => {
    return(
        <HomeContainer id='home'>
            <HomeWrapper>
                <ProfilePictureWrapper>
                    <Tilt options={{ max:25, scale: 1.05}}>
                        <ProfilePicture src ={portrait} />
                    </Tilt>
                </ProfilePictureWrapper>
                <ContentWrapper>
                    <Name>Hi! I am Brandon Yan</Name>
                    <Description>Software Engineer at Western University</Description>
                    <Blurb>I'm passionate about web development and building software that makes life easier. 
                        I like spending my free time exploring the ins and outs of cooking a beautiful steak. Check out my instagram to follow my journey in finding the perfect cut of steak, reverse sear, sous vide, and more.</Blurb>
                </ContentWrapper>
            </HomeWrapper>
        </HomeContainer>
    )
};

export default Home;