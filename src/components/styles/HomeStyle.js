import styled from 'styled-components';
import theme from './theme.js';
const { fontSizes, colors} = theme;

export const HomeContainer = styled.div`
    padding-top: 100px; 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`
export const VideoContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBackground = styled.video`
`

export const HomeContentContainer = styled.div`
    z-index: 3;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
`

export const ProfilePictureContainer = styled.div`
`

export const ProfilePicture = styled.img`
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid white;
    width: 50vmin;
`

export const NameContainer = styled.div`
`

export const Name = styled.p`
    margin: 20px;
    color: ${colors.mikadoYellow};
    font-size: ${fontSizes.xxxl};
`

export const DescriptionContainer = styled.div`
`

export const Description = styled.p`
    color: ${colors.snow};
    font-size: ${fontSizes.xl};
`