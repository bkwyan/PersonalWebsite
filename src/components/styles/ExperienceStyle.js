import styled from 'styled-components';
import theme from './theme.js';
const { fontSizes, colors} = theme;

export const ExperienceContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ExperienceHeader = styled.p`
    font-size: ${fontSizes.xxl};
    color: ${colors.snow};
`

export const IBMContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const IBMDescriptionWrapper = styled.div`
`

export const IBMHeader = styled.p`
    font-size: ${fontSizes.xl};
`

export const IBMTitle = styled.p`
`

export const IBMDescription = styled.p`
`

export const IBMImageWrapper = styled.div`
`

export const IBMImage = styled.img`
    width:50%;
`