import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
      <div>{new Date().getFullYear()} &copy; Zalán Zubik</div>
      <ul className="footer-links">
        <li><a title="LinkedIn" href="https://www.linkedin.com/in/zalanzubik/" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a></li>
        <li><a title="GitHub" href="https://github.com/ZalanZubik" rel="noopener noreferrer" target="_blank"><FaGithub /></a></li>
        <li><a title="Email" href="mailto:zubikzalan@gmail.com" ><FiMail /></a></li>
      </ul>
    </footer>
  )
}

export default Footer;