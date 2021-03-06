import React from 'react';
import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';

class ScrollUpButton extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  /*   scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } */

  handleScroll() {
    const scrollButton = document.getElementById('scrollUpButton');

    if (window.pageYOffset > 380) {
      if (!scrollButton.classList.contains('btnFadeIn')) {
        scrollButton.classList.remove('btnFadeOut');
        scrollButton.classList.add('btnFadeIn');
        scrollButton.style.display = 'flex';
      }
    } else {
      if (scrollButton.classList.contains('btnFadeIn')) {
        scrollButton.classList.remove('btnFadeIn');
        scrollButton.classList.add('btnFadeOut');
        setTimeout(() => {
          scrollButton.style.display = 'none';
        }, 500);
      }
    }
  }

  render() {
    const scrollUp = (duration) => {
      let targetPosition = 0;
      let startPosition = window.pageYOffset;
      let distance = targetPosition - startPosition;
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    };
    return (
      <ButtonContainer>
        <div className='scroll-button' title='Back To Top' id='scrollUpButton' onClick={() => scrollUp(1000)}>
          <IoIosArrowUp className='button-icon' />
        </div>
      </ButtonContainer>
    );
  }
}

export default ScrollUpButton;

const ButtonContainer = styled.div`
  .scroll-button {
    background: #004447;
    width: 3.4rem;
    height: 3.4rem;
    position: fixed;
    bottom: 2.7rem;
    right: 2.7rem;
    border-radius: 25%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .button-icon {
    font-size: 2.3rem;
    color: var(--mainWhite);
    transition: transform 0.5s ease-out;
  }

  .button-icon:hover {
    transform: translateY(-4px);
  }

  .btnFadeIn {
    animation-name: btnFadeIn;
    animation-fill-mode: both;
    animation-duration: 0.7s;
  }

  @keyframes btnFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .btnFadeOut {
    animation-name: btnFadeOut;
    animation-fill-mode: both;
    animation-duration: 0.5s;
  }

  @keyframes btnFadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  /* Media Queries */

  @media screen and (max-width: 767px) {
    .scroll-button {
      visibility: hidden;
    }
  }
`;
