import React, { Component } from 'react';

import '../../styles/content_styles.css';

class SoftSkills extends Component{
  render(){
    return(
      <div className="skills">
        <div className="title">
          Soft skills
        </div>
        <div className="soft_skills">
          <button type="button" className="btn btn-primary">Confidence</button>
          <button type="button" className="btn btn-primary">Teamwork</button>
          <button type="button" className="btn btn-primary">Flexibility</button>
          <button type="button" className="btn btn-primary">Communication</button>
          <button type="button" className="btn btn-primary">Reliability</button>
          <button type="button" className="btn btn-primary">Problem solving</button>
        </div>
      </div>
    );
  }
}

export default SoftSkills;
