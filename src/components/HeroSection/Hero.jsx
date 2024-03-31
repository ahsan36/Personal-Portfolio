import React from 'react'
import { HeroContainer, HeroLeftContainer, HeroRightContainer, Img, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton} from './HeroStyled.js';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import './Hero.css'
import HeroImg from '../../assets/Ahsan.png'

const Hero = () => {
    return (
        <div id='home'>
            <HeroContainer>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>
                            Hello, my name is <br /> 
                            <span className='name'>
                                {Bio.name}
                            </span>
                        </Title>

                        <TextLoop >
                            I am a
                            <Span>

                                {/* Typing Animation */}
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>

                        {/* Description */}
                        <SubTitle>{Bio.description}</SubTitle>

                        {/* Resume Button */}
                        <ResumeButton 
                            href={Bio.mail} 
                            target='display'>
                                Get In Touch
                        </ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default Hero