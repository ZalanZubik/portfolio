import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { GoThreeBars } from "react-icons/go";
import styled from 'styled-components';

class Navbar extends React.Component {
  state = {
    MenuOpen: false
  }

  handleToggle = () => {
    this.setState({ MenuOpen: !this.state.MenuOpen });
  }

  render() {
    return (
      <NavContainer>
        <div className="nav-center">
          <div className="nav-header">
            <a href="/"><img src={logo} alt="ZZ logo" className="nav-img" /></a>
            <button type="button" title="Menu" className="nav-btn" onClick={this.handleToggle}>
              <GoThreeBars className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.MenuOpen ? "nav-links show-nav" : "nav-links"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>
      </NavContainer>
    )
  }
}

export default Navbar;

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.6rem 2rem;
  background: var(--darkestBlue);
  z-index: 2;

  .nav-header {
    display: flex;
    justify-content: space-between;
  }

  .nav-img {
    width: 3.2rem;
    display: flex;
    align-items: center;
  }

  .nav-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .nav-icon {
    font-size: 2.1rem;
    color: var(--mainWhite);
  }

  .nav-btn:hover .nav-icon {
    color: var(--hoverColor);
  }

  .nav-links {
    height: 0;
    overflow: hidden;
    list-style-type: none;
    transition: all 0.3s linear;
  }

  .nav-links a {
    display: block;
    text-decoration: none;
    padding: 0.7rem 0;
    color: var(--mainWhite);
    transition: color 0.3s linear;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.1rem;
    font-family: 'Black Ops One', cursive;
    letter-spacing: 2px;
  }

  .nav-links a:hover {
    color: var(--hoverColor);
  }

  .show-nav {
    height: 6rem;
  }

  /* Media Queries */

  @media screen and (min-width: 768px) {
    .nav-btn {
      display: none;
    }

    .nav-center {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
    }

    .nav-links {
      height: auto;
      display: flex;
      margin-left: 4rem;
    }

    .nav-links a {
      margin: 0 1.5rem;
      padding: 0.5rem 0;
    }
  }
`;