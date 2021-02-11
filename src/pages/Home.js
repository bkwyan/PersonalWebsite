import React from 'react';
import Tilt from 'react-tilt';
import {
    HomeContainer,
    VideoContainer,
    VideoBackground,
    HomeContentContainer,
    ProfilePictureContainer,
    ProfilePicture,
    NameContainer,
    Name,
    DescriptionContainer,
    Description
} from '../components/styles/HomeStyle.js';
import portrait from '../images/portrait.jpg';
import Video from '../videos/video.mp4';

const Home = () => {
    return(
        <HomeContainer id='home'>
            <VideoContainer>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4'/>
            </VideoContainer>
            <HomeContentContainer>
                <ProfilePictureContainer>
                    <Tilt options={{ max:25, scale: 1.05}}>
                        <ProfilePicture src ={portrait} />
                    </Tilt>
                </ProfilePictureContainer>
                <NameContainer>
                    <Name>Brandon Yan</Name>
                </NameContainer>
                <DescriptionContainer>
                    <Description>Software Engineer at Western University</Description>
                </DescriptionContainer>
            </HomeContentContainer>
        </HomeContainer>
    )
};

export default Home;