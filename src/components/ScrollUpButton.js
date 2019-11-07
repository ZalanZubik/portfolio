import React from 'react';
import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';

class ScrollUpButton extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  scrollToTop() {
    window.scrollTo({ top: 0 });
  }

  handleScroll() {
    const scrollButton = document.getElementById("scrollUpButton");

    if (window.pageYOffset > 380) {
      if (!scrollButton.classList.contains("btnFadeIn")) {
        scrollButton.classList.remove("btnFadeOut");
        scrollButton.classList.add("btnFadeIn");
        scrollButton.style.display = "flex";
      }
    }
    else {
      if (scrollButton.classList.contains("btnFadeIn")) {
        scrollButton.classList.remove("btnFadeIn");
        scrollButton.classList.add("btnFadeOut");
        setTimeout(() => {
          scrollButton.style.display = "none";
        }, 500);
      }
    }
  }

  render() {
    return (
      <ButtonContainer>
        <div className="scroll-button" title="Back To Top" id="scrollUpButton" onClick={this.scrollToTop}>
          <IoIosArrowUp className="button-icon" />
        </div>
      </ButtonContainer>
    )
  }
}

export default ScrollUpButton;

const ButtonContainer = styled.div`
  .scroll-button {
  background-color: #002E30;
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
    animation-duration: 0.7s;
    animation-fill-mode: both;
    animation-name: btnFadeIn;
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
    animation-duration: 0.5s;
    animation-fill-mode: both;  
    animation-name: btnFadeOut;
  }

  @keyframes btnFadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;