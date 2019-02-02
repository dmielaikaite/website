import React, { Component } from 'react';

import Header from './components/header/index';
import Experience from './components/experience/index';
import TechnicalSkills from './components/skills/index';
import SoftSkills from './components/skills/soft_skills_index';
import Education from './components/education/index';
import Volunteer from './components/volunteer/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="row content">
          <div className="col-8">
            <Experience />
          </div>
          <div className="col-4 main_skills">
            <TechnicalSkills />
            <SoftSkills />
            <Education />
            <Volunteer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
