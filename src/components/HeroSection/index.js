import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton, ButtonContainer, ScrollDownContainer, ScrollDownIcon } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ButtonContainer>
                            <ResumeButton href={Bio.resume} target='_blank'>Check Resume</ResumeButton>
                            <ResumeButton href={Bio.github} target='_blank'>Check my contributions</ResumeButton>
                        </ButtonContainer>
                        <SocialMediaIcons>
                            <SocialMediaIcon href={Bio.github} target='_blank'><FaGithub /></SocialMediaIcon>
                            <SocialMediaIcon href={Bio.linkedin} target='_blank'><FaLinkedin /></SocialMediaIcon>
                            <SocialMediaIcon href={'https://talatfm.medium.com/'} target='_blank'><FaMedium /></SocialMediaIcon>
                        </SocialMediaIcons>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

                <ScrollDownContainer onClick={() => window.scrollTo(0, window.innerHeight)}>
                    <ScrollDownIcon />
                    <span style={{ color: 'white', fontSize: '14px' }}>Scroll Down</span>
                </ScrollDownContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection