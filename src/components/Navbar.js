import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { GoThreeBars } from "react-icons/go";

class Navbar extends React.Component {
  state = {
    BarsOpen: false
  }

  handleToggle = () => {
    this.setState({ BarsOpen: !this.state.BarsOpen });
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <a href="/"><img src={logo} alt="ZZ logo" className="nav-img" /></a>
            <button type="button" title="Menu" className="nav-btn" onClick={this.handleToggle}>
              <GoThreeBars className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.BarsOpen ? "nav-links show-nav" : "nav-links"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;