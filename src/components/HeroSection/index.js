import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton, DownloadButton, ButtonContainer, ScrollDownContainer, ScrollDownIcon } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

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
                            <DownloadButton href={Bio.resume} target='_blank' download>Download CV</DownloadButton>
                        </ButtonContainer>
                        <SocialMediaIcons>
                            <SocialMediaIcon href={Bio.github} target='_blank'><FaGithub /></SocialMediaIcon>
                            <SocialMediaIcon href={Bio.linkedin} target='_blank'><FaLinkedin /></SocialMediaIcon>
                            <SocialMediaIcon href={Bio.twitter} target='_blank'><FaTwitter /></SocialMediaIcon>
                            <SocialMediaIcon href={Bio.insta} target='_blank'><FaInstagram /></SocialMediaIcon>
                            <SocialMediaIcon href={Bio.facebook} target='_blank'><FaFacebook /></SocialMediaIcon>
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