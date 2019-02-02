import React, { Component } from 'react';

import '../../styles/content_styles.css';

class Volunteer extends Component{
  render(){
    return(
      <div className="volunteer">
        <div className="title">
          Volunteer experience
        </div>
        <div className="event_title">
          TEDxCERN 2018
        </div>
        <div className="start_end_date">
          November 2018
        </div>
      </div>
    );
  }
}

export default Volunteer;
