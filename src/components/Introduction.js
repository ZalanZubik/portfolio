import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import IntroImg from '../images/IntroImg.jpg';
import { IoIosArrowDown } from 'react-icons/io';

class Introduction extends React.Component {

  scrollDown() {
    document.getElementById('highlighted').scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <IntroContainer>
        <div className="background-img" />
        <div className="intro-card">
          <h1>Hi, I'm Zalán Zubik</h1>
          <h2>a web developer</h2>
          <ul className="intro-links">
            <li><a title="LinkedIn" href="https://www.linkedin.com/in/zalanzubik/" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a></li>
            <li><a title="GitHub" href="https://github.com/ZalanZubik" rel="noopener noreferrer" target="_blank"><FaGithub /></a></li>
            <li><a title="Email" href="mailto:zubikzalan@gmail.com"><FiMail /></a></li>
          </ul>
        </div>
        <div onClick={this.scrollDown} className="intro-arrow"><IoIosArrowDown className="intro-arrow-icon" /></div>
      </IntroContainer>
    )
  }
}

export default Introduction;

const IntroContainer = styled.div`
  height: calc(100vh - 3.7rem);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .background-img {
    opacity: 0;
    background: url(${IntroImg}) center/cover no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    animation-name: fadeIn;
    animation-delay: 0.3s;
    animation-timing-function: ease-in;
    animation-duration: 1.3s;
    animation-fill-mode:forwards;
  }
  
  @keyframes fadeIn {
    from {opacity: 0}
    to {opacity: 1}
  }

  .intro-card {
    z-index: 1;
    width: 80vw;
    max-width: 480px;
    text-align: center;
    margin-bottom: 4rem;
    color: var(--mainWhite);
    background-color: rgba(0,29,31,0.8);
    padding: 2.3rem 1.7rem 1.2rem 1.7rem;
    font-family: 'Oswald', sans-serif;
    letter-spacing: 3px;
  }
  
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

  .intro-arrow {
    position: absolute;
    bottom: 2rem;
    cursor: pointer;
    transition: transform 0.4s ease-out;
  }

  .intro-arrow-icon {
    font-size: 3rem;
    color: var(--mainWhite);
  }

  .intro-arrow:hover {
    transform: translateY(6px);
  }

  /* Media Queries */

  @media screen and (max-width: 991px){
    height: 80vh;

    .intro-arrow {
      visibility: hidden;
    }
  }
  
  @media screen and (max-width: 767px) {
    height: 70vh;

    .intro-links a:hover {
      transform: none;
    }
  }

  @media screen and (max-width: 479px){
    height: 60vh;

    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1.3rem;
    }

    .intro-links {
      margin-top: 1.5rem;
    }

    .intro-links a {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 380px){
    .intro-card {
      padding: 1.7rem 1.3rem 1.2rem 1.3rem;
    }
    
    h1 {
      font-size: 1.4rem;
    }

    h2 {
      font-size: 1.1rem;
      padding-top: 0.4rem;
    }

    .intro-links {
      margin-top: 1rem;
    }
    .intro-links a {
      font-size: 1.8rem;
    }
  }

`;