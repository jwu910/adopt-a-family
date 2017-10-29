import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

  render () {
    return (
      <div className="header-container">
        <div className="header-site-name col-3">
          <Link to='/'>
            Adopt A Family
          </Link>
        </div>

        <ul className="header-links col-8">
          <li className="header-mission">
            Mission
          </li>
          <li className="header-family">
            Our Families
          </li>
          <li className="header-about">
            <Link to="/aboutus">
              About us
            </Link>
          </li>
          <li className="header-donate">
            Donate
          </li>
          <li>
            <Link to="/registration">
              <button className="btn-register">
                ADOPT A FAMILY
              </button>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;