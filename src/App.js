import React, { Component } from 'react';

import Header from './components/header/index';
import Experience from './components/experience/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="row content">
          <div className="col-6">
            <Experience />
          </div>
          <div className="col-6">
            Skills
          </div>
        </div>
      </div>
    );
  }
}

export default App;
