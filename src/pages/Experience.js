import React from 'react';
import {
    ContentContainer,
    ContentWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    LearnMore,
    ImageWrapper,
    Image
} from '../components/styles/ExperienceStyle.js';

import ibmImage from '../images/ibm.png';

const Experience = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img, alt}) => {
    return(
        <ContentContainer lightBg={lightBg} id={id}>
            <ContentWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <LearnMore lightText={lightText}>Learn more &gt;&gt;</LearnMore>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImageWrapper>
                            <Image src={img} alt={alt}/>
                        </ImageWrapper>
                    </Column2>
                </InfoRow>
            </ContentWrapper>
        </ContentContainer>
    )
};

export default Experience;