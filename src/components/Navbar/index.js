import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      if (isOpen) {
        setIsOpen(false);
      }
    }
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about" onClick={(e) => handleClick(e, 'about')}>About</NavLink>
          <NavLink href="#skills" onClick={(e) => handleClick(e, 'skills')}>Skills</NavLink>
          <NavLink href="#experience" onClick={(e) => handleClick(e, 'experience')}>Experience</NavLink>
          <NavLink href="#projects" onClick={(e) => handleClick(e, 'projects')}>Projects</NavLink>
          <NavLink href="#education" onClick={(e) => handleClick(e, 'education')}>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={(e) => handleClick(e, 'about')}>About</MobileLink>
            <MobileLink href="#skills" onClick={(e) => handleClick(e, 'skills')}>Skills</MobileLink>
            <MobileLink href="#experience" onClick={(e) => handleClick(e, 'experience')}>Experience</MobileLink>
            <MobileLink href="#projects" onClick={(e) => handleClick(e, 'projects')}>Projects</MobileLink>
            <MobileLink href="#education" onClick={(e) => handleClick(e, 'education')}>Education</MobileLink>
            <GitHubButton 
              style={{
                padding: '10px 16px',
                background: `${theme.primary}`, 
                color: 'white',
                width: 'max-content'
              }} 
              href={Bio.github} 
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar