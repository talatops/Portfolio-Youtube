
import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion } from 'framer-motion';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    position: relative;
`;

const CustomTimelineDot = styled(TimelineDot)`
    && {
        padding: 8px;
        background-color: ${({ theme }) => theme.primary};
        box-shadow: 0 0 10px ${({ theme }) => theme.primary};
        
        &:hover {
            background-color: ${({ theme }) => theme.primary + 'dd'};
            transform: scale(1.2);
            transition: all 0.3s ease;
        }
    }
`;

const CustomTimelineConnector = styled(TimelineConnector)`
    && {
        background: linear-gradient(
            180deg, 
            ${({ theme }) => theme.primary} 0%,
            ${({ theme }) => theme.primary + '50'} 100%
        );
        width: 3px;
        box-shadow: 0 0 5px ${({ theme }) => theme.primary + '50'};
    }
`;

const CustomTimelineContent = styled(TimelineContent)`
    && {
        padding: 20px;

        @media (max-width: 768px) {
            padding: 12px;
        }
    }
`;

const CustomTimelineItem = styled(TimelineItem)`
    && {
        &::before {
            display: none;
        }
    }
`;

const Experience = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc>
                    My professional journey and the impact I've made along the way.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.3 }}
                            >
                                <CustomTimelineItem>
                                    <TimelineSeparator>
                                        <CustomTimelineDot />
                                        {index !== experiences.length - 1 && (
                                            <CustomTimelineConnector />
                                        )}
                                    </TimelineSeparator>
                                    <CustomTimelineContent>
                                        <ExperienceCard experience={experience} />
                                    </CustomTimelineContent>
                                </CustomTimelineItem>
                            </motion.div>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Experience