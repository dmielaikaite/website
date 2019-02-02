import React, { Component } from 'react';

import Education1 from './education_1';
import Education2 from './education_2';

import '../../styles/content_styles.css';

class Education extends Component{
  render(){
    return(
      <div className="education">
        <Education1 />
        <Education2 />
      </div>
    );
  }
}

export default Education;
