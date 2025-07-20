import React from 'react'
import { Container, Section, Title, Grid } from '../../utils/StyledComponents'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const SkillsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const SkillsGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const SkillCard = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid ${({ theme }) => theme.primary + '20'};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 16px;
  padding: 18px 36px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow_light};
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.primary};
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    border-radius: 4px;
    background: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }

  ${SkillCard}:hover &:after {
    width: 100px;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  border: 1px solid ${({ theme }) => theme.text_primary + 15};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
    box-shadow: 0 5px 10px ${({ theme }) => theme.primary + '20'};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  transition: transform 0.3s ease;

  ${SkillItem}:hover & {
    transform: scale(1.2);
  }
`;

const Skills = () => {
  return (
    <Section id="skills">
      <SkillsContainer>
        <Title>Skills</Title>
        <SkillsGrid stagger>
          {skills.map((skill, index) => (
            <SkillCard key={index} style={{ '--index': index }}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, itemIndex) => (
                  <SkillItem key={itemIndex}>
                    <SkillImage src={item.image} alt={item.name} loading="lazy" />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </Section>
  )
}

export default Skills