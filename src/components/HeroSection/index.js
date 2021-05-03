import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';
import { HeroContainer, HeroBG, VideoBG, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowDown, ArrowMoreDown } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBG>
                <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBG>
            <HeroContent>
                <HeroH1>Welcome to Barnabus.</HeroH1>
                <HeroP>
                    We are currently in our testing phase.
                     Sign up for an account now and be a pioneer
                     in the nightlife revolution.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="mission"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        style={{textDecoration: 'none' }}
                        primary='true'
                        dark='true'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true'
                        offset={-80}
                    > Our Mission {hover ? <ArrowDown /> : <ArrowMoreDown />} 
                    </Button>
                    <Button to="signup" 
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        style={{textDecoration: 'none' }}
                        primary='true'
                        dark='true'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true'
                        offset={-80}
                    > Create Account 
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;