import React, { Component } from 'react';

import '../../styles/header_style.css';

class Header extends Component {
  render() {
    return (
      <div className="row header">
        <div className="col-1 block"/>
        <div className="col-7 description-container">
          <div className="name-surname">
            Donata Mielaikaite
          </div>
          <div className="job-title">
            Junior Software Engineer
          </div>
          <div className="brief-summary">
            Experienced Junior Software Engineer with a demonstrated history of working in a different fields. Motivated, teamwork-oriented and responsable with a Bachelor's degree focused in Information Technology from Vilnius University.  
          </div>
        </div>
        <div className="col-4 personal-info">
          <ul>
            <li>d.mielaikaite@gmail.com <i className="fa fa-envelope" aria-hidden="true"></i></li>
            <li>+37062220807 <i className="fa fa-phone-square" aria-hidden="true"/></li>
            <li>Vilnius, Lithuania <i className="fa fa-home" aria-hidden="true"/></li>
            <li><a href="https://www.linkedin.com/in/donata-mielaikaitė-370471b5">linkedin.com/in/donata-mielaikaitė</a> <i className="fa fa-linkedin"/></li>
            <li><a href="https://github.com/dmielaikaite">dmielaikaite</a> <i className="fa fa-github" aria-hidden="true"/></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
