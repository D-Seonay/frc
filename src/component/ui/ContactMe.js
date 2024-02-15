import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTheme } from "../ThemeContext";

// Animation pour le texte "EMAIL" lorsqu'il est survolé
const shakeAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  75% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

// Style du texte "DROP ME AN EMAIL"
const DropMeEmailText = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  font-size: 4rem;
  text-align: center;
  margin: 5rem 0;
  color: ${props => (props.theme === 'light' ? '#000' : '#fff')};

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

// Style du texte "EMAIL" avec animation
const EmailText = styled.a`
  font-size: 4rem;
  font-family: 'Gallery', sans-serif;
  display: inline-block;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  margin-left: 1rem;
  color: ${props => (props.theme === 'light' ? '#000' : '#fff')};

  &:hover {
    animation: ${shakeAnimation} 0.5s ease-in-out infinite; /* Animation de secousse lors du survol */
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const ContactMeContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 2rem;
  text-align: center;
  width: 100%;
  height: 60vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => (props.theme === 'light' ? '#000' : '#fff')};

  &:hover {
    /* Ajoutez ici les styles pour le survol du titre si nécessaire */
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const Divider = styled.hr`
  width: 75%;
  margin: 1rem auto;
  border-color: ${props => (props.theme === 'light' ? '#000' : '#fff')};

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 576px) {
    width: 30%;
  }
`;

const EmailLink = styled.a`
  color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
  text-decoration: none;
  font-weight: bold;
  margin-right: 1rem;

  &:hover {
    /* Ajoutez ici les styles pour le survol du lien d'email si nécessaire */
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialLink = styled.a`
  color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
  text-decoration: none;
  font-size: 1rem;
  margin: 0 1rem;

  &:hover {
    /* Ajoutez ici les styles pour le survol du lien social si nécessaire */
  }
`;

const Date = styled.p`
  color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
  font-size: 1rem;

  &:hover {
    /* Ajoutez ici les styles pour le survol de la date si nécessaire */
  }
`;

const SmallLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1rem auto;
  border-color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
`;

const ContactMe = () => {
	const { theme } = useTheme();

	return (
		<ContactMeContainer>
			<Title theme={theme}>Contact Me</Title>
			<Divider theme={theme} />
			<DropMeEmailText theme={theme}>
				DROP ME AN <EmailText theme={theme} href={`mailto:matheodelaunay04@gmail.com`}>EMAIL</EmailText>
			</DropMeEmailText>
			<Divider theme={theme} />
			<SmallLine>
				<Date theme={theme}>2024 © Matheo Delaunay</Date>
				<SocialLinks>
					<SocialLink theme={theme} href="https://www.linkedin.com/">LinkedIn</SocialLink>
					<SocialLink theme={theme} href="https://github.com/">GitHub</SocialLink>
				</SocialLinks>
			</SmallLine>
		</ContactMeContainer>
	);
};

export default ContactMe;
