import styled from 'styled-components';
import theme from './theme.js';
const { fontSizes, colors} = theme;

export const MainContentWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}`

export const ProfilePictureWrapper = styled.div`
}`

export const ProfilePicture = styled.img`
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid white;
    width: 50vmin;
}`

export const NameWrapper = styled.div`
}`

export const Name = styled.p`
    color: ${colors.mikadoYellow};
    font-size: ${fontSizes.xxl};
}`

export const DescriptionWrapper = styled.div`
}`

export const Description = styled.p`
    color: ${colors.snow};
    font-size: ${fontSizes.xl};
}`