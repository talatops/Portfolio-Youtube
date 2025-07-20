import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: ${({ theme }) => theme.card};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  pointer-events: ${({ visible }) => (visible ? 'all' : 'none')};
  transform: translateY(${({ visible }) => (visible ? '0' : '20px')});
  z-index: 999;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 10px ${({ theme }) => theme.primary};
  }

  svg {
    color: ${({ theme }) => theme.primary};
    font-size: 20px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    bottom: 80px;
  }
`;

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll to 0
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Button
      visible={isVisible}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </Button>
  );
};

export default BackToTop; 