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
    if (window.pageYOffset > 380 ) {
      document.getElementById("scrollUpButton").style.display = "flex";
    }
    else {
      document.getElementById("scrollUpButton").style.display = "none";
    }
  }

  render() {
    return (
      <ButtonContainer title="Back To Top" id="scrollUpButton" onClick={this.scrollToTop}>
        <IoIosArrowUp className="button-icon" />
      </ButtonContainer>
    )
  }
}

export default ScrollUpButton;

const ButtonContainer = styled.div`
  background-color: #2b2b2c;
  width: 3.5rem;
  height: 3.5rem;
  position: fixed; 
  bottom: 3rem;
  right: 3rem;
  z-index: 1;
  border-radius: 25%;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;

  .button-icon {
    font-size: 2rem;
    color: var(--mainWhite);
  }
`;