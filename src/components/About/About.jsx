import React from 'react'
import { AboutContainer, AboutLeftContainer, Img, AboutRightContainer, AboutInnerContainer, Title, SubTitle, } from './AboutStyled';
import { AboutDetails } from '../../data/constants';
import HeroImg from '../../assets/Ahsan.png'
import '../../App.css'

const About = () => {
    return (
        <div id="about">
            <AboutContainer>
                <AboutInnerContainer >
                    <AboutLeftContainer id="Left">

                        <Title>
                            <span className='heading'>
                                01.&nbsp;&nbsp;
                            </span>
                                About Me
                        </Title>
                        
                        {/* Description */}
                        <SubTitle>
                            {AboutDetails.description}
                        </SubTitle>
                        <SubTitle>
                            {AboutDetails.others}
                        </SubTitle>
                    </AboutLeftContainer>
                </AboutInnerContainer>

                {/* Image */}
                <AboutRightContainer id="Right">
                    <Img src={HeroImg} alt="hero-image" />
                </AboutRightContainer>

            </AboutContainer>
        </div>
    )
}

export default About


