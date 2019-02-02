import React, { Component } from 'react';

import Work1 from './work_1';
import Work2 from './work_2';
import Work3 from './work_3';
import Work4 from './work_4';

import '../../styles/content_styles.css';

class Experience extends Component {
  render() {
    return (
      <div className="work">
        <Work1 />
        <Work2 />
        <Work3 />
        <Work4 />
      </div>
    );
  }
}

export default Experience;
