import React, { useState } from 'react'
import styled from 'styled-components'
import { FaArrowRight, FaChartLine, FaUsers, FaClock } from 'react-icons/fa'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: ${({ expanded }) => (expanded ? 'unset' : '4')};
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    transition: all 0.3s ease;
`

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            45deg,
            transparent,
            rgba(48, 110, 232, 0.05),
            transparent
        );
        transform: translateX(-100%);
        transition: 0.6s;
    }

    &:hover::before {
        transform: translateX(100%);
    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`

const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const MetricsContainer = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 8px;
    flex-wrap: wrap;
`

const Metric = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.card_light + 50};
    color: ${({ theme }) => theme.text_primary};
    font-size: 13px;
    font-weight: 500;

    svg {
        color: ${({ theme }) => theme.primary};
        font-size: 16px;
    }
`

const ExpandButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.primary};
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 0;
    transition: all 0.2s ease;

    &:hover {
        opacity: 0.8;
    }
`

const ExperienceCard = ({ experience }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card>
            <Top>
                <Image src={experience.img} alt={experience.company} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc && (
                    <>
                        <Span expanded={expanded}>{experience?.desc}</Span>
                        <ExpandButton onClick={() => setExpanded(!expanded)}>
                            {expanded ? 'Show Less' : 'Read More'} 
                            <FaArrowRight style={{ 
                                transform: expanded ? 'rotate(-90deg)' : 'rotate(90deg)',
                                transition: 'all 0.2s ease'
                            }} />
                        </ExpandButton>
                    </>
                )}
                {experience?.skills && (
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <Skill key={index}>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                )}
            </Description>
            <MetricsContainer>
                {experience.metrics?.impact && (
                    <Metric>
                        <FaChartLine />
                        {experience.metrics.impact}
                    </Metric>
                )}
                {experience.metrics?.team && (
                    <Metric>
                        <FaUsers />
                        {experience.metrics.team}
                    </Metric>
                )}
                {experience.metrics?.duration && (
                    <Metric>
                        <FaClock />
                        {experience.metrics.duration}
                    </Metric>
                )}
            </MetricsContainer>
            {experience.doc && (
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} />
                </a>
            )}
        </Card>
    )
}

export default ExperienceCard