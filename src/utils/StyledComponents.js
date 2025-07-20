import styled, { css, keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Shared styles
export const hoverEffect = css`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      ${({ theme }) => theme.primary + '20'},
      transparent
    );
    transition: all 0.5s;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

    &:before {
      left: 100%;
    }
  }
`;

export const cardStyle = css`
  background: ${({ theme }) => theme.card};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  ${hoverEffect}

  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }
`;

// Enhanced Button Component
export const Button = styled.button`
  padding: 12px 24px;
  background: ${({ theme, outlined }) => 
    outlined ? 'transparent' : theme.primary};
  color: ${({ theme, outlined }) => 
    outlined ? theme.primary : theme.white};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${({ theme }) => theme.primary + '40'};
    background: ${({ theme, outlined }) => 
      outlined ? theme.primary + '20' : theme.primary + 'ee'};
  }

  &:active {
    transform: translateY(0);
  }

  ${({ animated }) => animated && css`
    animation: ${float} 3s ease-in-out infinite;
  `}
`;

// Enhanced Section Component
export const Section = styled.section`
  padding: 80px 0;
  position: relative;
  background: ${({ theme, alt }) => alt ? theme.bg2 : theme.bg};
  transition: all 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.primary + '40'},
      transparent
    );
  }

  animation: ${fadeIn} 0.5s ease-out;
`;

// Enhanced Card Component
export const Card = styled.div`
  ${cardStyle}
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.primary};
    transform: scaleY(0);
    transition: transform 0.3s ease;
    transform-origin: bottom;
  }

  &:hover:after {
    transform: scaleY(1);
  }
`;

// Enhanced Text Components
export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 1rem;
  position: relative;
  transition: all 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.primary};
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 1rem;
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.text_primary};
  }
`;

// Enhanced Container Component
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  ${({ animated }) => animated && css`
    & > * {
      animation: ${fadeIn} 0.5s ease-out;
    }
  `}
`;

// Enhanced Grid Component
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  & > * {
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-out forwards;
    animation-delay: ${({ stagger }) => stagger ? 'calc(0.1s * var(--index))' : '0s'};
  }
`;

// Enhanced Link Component
export const StyledLink = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.primary + 'ee'};
    
    &:after {
      width: 100%;
    }
  }
`;

// Enhanced Icon Container
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.primary};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    animation: ${pulse} 1s infinite;
  }
`;

// Enhanced Badge Component
export const Badge = styled.span`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  background: ${({ theme, variant }) => 
    variant === 'primary' ? theme.primary + '20' :
    variant === 'success' ? theme.success + '20' :
    variant === 'warning' ? theme.warning + '20' :
    theme.error + '20'
  };
  color: ${({ theme, variant }) => 
    variant === 'primary' ? theme.primary :
    variant === 'success' ? theme.success :
    variant === 'warning' ? theme.warning :
    theme.error
  };
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
`; 