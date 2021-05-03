import React from 'react';
import Icon1 from '../../images/group.jpg';
import Icon2 from '../../images/Denver-bar.jpg';
import Icon3 from '../../images/winebar-crowd.jpg';
import { ExperienceContainer,
    ExperienceH1,
    ExperienceCard,
    ExperienceWrapper,
    ExperienceIcon,
    ExperienceH2,
    ExperienceP } from './ExperienceElements';

const Experience = () => {
    return (
        <ExperienceContainer id="experience">
            <ExperienceH1>The Barnabus Experience</ExperienceH1>
            <ExperienceWrapper>
                <ExperienceCard>
                    <ExperienceIcon src={Icon1}/>
                    <ExperienceH2>Guest</ExperienceH2>
                    <ExperienceP>Search an area for a variety of events, parties and get-togethers happening
                        around you. Find parties curated to your specific interests or that are being hosted by 
                        renowned hosts at incredible spaces.
                    </ExperienceP>
                </ExperienceCard>
                <ExperienceCard>
                    <ExperienceIcon src={Icon2}/>
                    <ExperienceH2>Space</ExperienceH2>
                    <ExperienceP>Promote your space to event hosts. Pay nothing for advertising. Simply
                        approve or deny the host requests for scheduling and watch your revenue increase.  
                    </ExperienceP>
                </ExperienceCard>
                <ExperienceCard>
                    <ExperienceIcon src={Icon3}/>
                    <ExperienceH2>Host</ExperienceH2>
                    <ExperienceP>As a host, you are the most important component in the Barnabus equation.
                        You are the person who promotes the space and who puts on the sorts of memorable parties
                        guests want to go to. 
                    </ExperienceP>
                </ExperienceCard>
            </ExperienceWrapper>
        </ExperienceContainer>
    );
};

export default Experience;