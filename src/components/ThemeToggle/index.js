import React from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleButton = styled.button`
  position: fixed;
  right: 20px;
  top: 20px;
  background: ${({ theme }) => theme.card};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 30px;
  padding: 10px;
  cursor: pointer;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    top: auto;
    bottom: 20px;
    right: 20px;
  }

  svg {
    color: ${({ theme }) => theme.primary};
    font-size: 20px;
    transition: all 0.3s ease;
  }
`;

const ThemeToggle = ({ isDarkTheme, toggleTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      {isDarkTheme ? <FaSun /> : <FaMoon />}
    </ToggleButton>
  );
};

export default ThemeToggle; 