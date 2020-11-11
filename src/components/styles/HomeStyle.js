import styled from 'styled-components';
import theme from './theme.js';
const { fontSizes, colors} = theme;

export const MainContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
}`

export const ProfilePictureWrapper = styled.div`
    position: relative;
}`

export const ProfilePicture = styled.img`
    border-radius = 50%;
    width: 150px;
}`

export const NameWrapper = styled.div`

}`

export const Name = styled.p`
    color: ${colors.mikadoYellow};
    font-size = ${fontSizes.xl};
}`

export const DescriptionWrapper = styled.div`
    font-size = ${fontSizes.xxl};
}`

export const Description = styled.p`
    color: ${colors.grayWeb};
    font-size = ${fontSizes.base};
}`