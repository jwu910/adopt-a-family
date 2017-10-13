import React from 'react';

const Header = (props) => {
  return (
    <header>
      <div>
        <h1 className="headerText">Adopt A Family</h1>
      </div>
      <hgroup className="headerLinks">
        <div className="headerMission">
          Mission
        </div>
        <div className="headerFamily">
          Our Families
        </div>
        <div className="headerAbout">
          About us
        </div>
        <div className="headerDonate">
          Donate
        </div>
        <a href='/' className="headerLogin">
          <button>
            ADOPT A FAMILY
          </button>
        </a>
      </hgroup>
    </header>
  );
};

export default Header;