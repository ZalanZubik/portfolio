import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Introduction = () => {
  return (
    <div className="intro-container">
      <Intro>
        <h1>Hi, I'm Zalán Zubik</h1>
        <h2>a web developer</h2>
        <ul className="intro-links">
          <li><a title="LinkedIn" href="https://www.linkedin.com/in/zalanzubik/" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a></li>
          <li><a title="GitHub" href="https://github.com/ZalanZubik" rel="noopener noreferrer" target="_blank"><FaGithub /></a></li>
          <li><a title="Email" href="mailto:zubikzalan@gmail.com"><FiMail /></a></li>
        </ul>
      </Intro>
    </div>
  )
}

export default Introduction;

const Intro = styled.div`
  width: 50vh;
  text-align: center;
  color: var(--mainWhite);
  background-color: rgba(0,46,48,0.7);
  padding: 2.3rem 1.7rem 1.2rem 1.7rem;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 3px;

  h2 {
    padding-top: 0.6rem;
    font-style: italic;
  }

  .intro-links {
    margin-top: 2.1rem;
    display: flex;
    justify-content: space-around;
    list-style-type: none;
  }

  .intro-links a {
    display: block;
    color: var(--mainWhite);
    font-size: 2.7rem;
    transition: transform 0.4s ease-out;
  }

  .intro-links a:hover {
    transform: translateY(6px);
  }
`;