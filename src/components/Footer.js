import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        {new Date().getFullYear()} &copy; Zalán Zubik
      </p>
      <ul className="footer-links">
        <li><a title="LinkedIn" href="https://www.linkedin.com/in/zalanzubik/" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a></li>
        <li><a title="GitHub" href="https://github.com/ZalanZubik" rel="noopener noreferrer" target="_blank"><FaGithub /></a></li>
        <li><a title="Email" href="mailto:zubikzalan@gmail.com" ><FiMail /></a></li>
      </ul>
    </FooterContainer>
  )
}

export default Footer;

const FooterContainer = styled.footer`
  position: relative;
  height: 4rem;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 0.5rem 0 0.3rem 0;
  background: var(--darkestBlue);
  color: var(--mainWhite);
  display: flex;
  justify-content: space-around;
  align-items: center;

  .footer-links {
    list-style-type: none;
    height: auto;
    display: flex;
    justify-content: center;
  }

  .footer-links a {
    display: block;
    color: var(--mainWhite);
    font-size: 1.6rem;
    margin: 0 1.5rem;
    padding: 4px;
    transition: transform 0.4s ease-out;
  }
  .footer-links a:hover {
    transform: translateY(6px);
  }

  p {
    padding-bottom: 0.5rem;
  }
`;