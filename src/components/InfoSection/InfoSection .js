import React from 'react';
import { InfoSec } from './InfoSection.element';
import { Container } from '../../globalStyles';

const InfoSection = ({ lightBg }) => {
    return (
    
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>h1</TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>

    );
};

export default InfoSection;

