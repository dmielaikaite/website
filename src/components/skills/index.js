import React, { Component } from 'react';

import '../../styles/content_styles.css';

class TechnicalSkills extends Component{
  render(){
    return(
      <div className="skills">
        <div className="title">
          Technical skills
        </div>
        <div className="top_skills">
          Top Skills
          <div className="description">
            ReactJS, JavaScript, Python, HTML, CSS, Flask, AngularJS, Git, MySQL, REST API, Node.js
          </div>
        </div>
        <div className="planning">
          Research and planning
          <div className="description">
            Identifying problems, Developing evaluations, looking for different kinds of solutions
          </div>
        </div>
        <div className="cloud">
          Cloud-Based Technologies
          <div className="description">
            Docker
          </div>
        </div>
      </div>
    );
  }
}

export default TechnicalSkills;
