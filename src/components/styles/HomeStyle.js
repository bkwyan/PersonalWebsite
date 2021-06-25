import styled from 'styled-components';
import theme from './theme.js';
const { fontSizes, colors} = theme;

export const HomeContainer = styled.div`
    height: 100vh;
    position: relative;
    z-index: 1;
    background-color: ${colors.raisinBlack};
`

export const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const ProfilePictureWrapper = styled.div`
    position: relative;
    right: 0;
`

export const ProfilePicture = styled.img`
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid white;
    width: 30vmin;
`

export const Name = styled.p`
    font-family: 'Montserrat';
    margin: 20px 20px 0px 20px;
    color: ${colors.mikadoYellow};
    font-size: 48px;
`

export const Description = styled.p`
    font-family: 'Lato';
    margin: 0px 20px 20px 20px;
    color: ${colors.snow};
    font-size: 16px;
`

export const Blurb = styled.p`
    font-family: 'Roboto';
    font-size: 18px;
    margin: 20px;
    color:${colors.snow};
    width:500px;
`

export const ContentWrapper = styled.div`
    z-index: 3;
    padding: 8px 24px;
`