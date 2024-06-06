import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From DevOps to BackEnd. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'DevSecOps' ?
            <ToggleButton active value="DevSecOps" onClick={() => setToggle('DevSecOps')}>DevSecOps</ToggleButton>
            :
            <ToggleButton value="DevSecOps" onClick={() => setToggle('DevSecOps')}>DevSecOps</ToggleButton>
          }
          <Divider />
          {toggle === 'DevOps' ?
            <ToggleButton active value="DevOps" onClick={() => setToggle('DevOps')}>DevOps</ToggleButton>
            :
            <ToggleButton value="DevOps" onClick={() => setToggle('DevOps')}>DevOps</ToggleButton>
          }
          <Divider />
          {toggle === 'BackEnd' ?
            <ToggleButton active value="BackEnd" onClick={() => setToggle('BackEnd')}>BackEnd</ToggleButton>
            :
            <ToggleButton value="BackEnd" onClick={() => setToggle('BackEnd')}>BackEnd</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects