import React from 'react';
import links from '../constants/links';

const Footer = (props) => {
  return (
    <footer>
      <ul className="footer-text">
        <li className="footer-copyright">&copy; 2017 Adopt A Family</li>
        <li className="footer-spacer"> | </li>
        <li className="footer-privacy">
          <a href={links.placeholder} rel="noopener noreferrer" target="_blank">Privacy Policy</a>
        </li>
        <li className="cooter-contact">
          <a href={links.placeholder} rel="noopener noreferrer" target="_blank">Contact Us</a>
        </li>
      </ul>

      <ul className="footer-icons">
        <li>
          <a href={links.github} className="social-icon" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github fa-2x"></i>
          </a>
        </li>
        <li>
          <a href={links.email} className="social-icon" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-envelope fa-2x"></i>
          </a>
        </li>
        <li>
          <a href={links.aboutus} className="social-icon" rel="noopener noreferrer" target="_blank">
            <i className=" fa fa-user-circle fa-2x"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;