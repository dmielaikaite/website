import React, { Component } from 'react';

class Work1 extends Component{
  render(){
    return (
      <div>
        <div className="work_title">
          Work experience
        </div>
        <div className="job_title">
          Transfer Operator
        </div>
        <div className="company">
          CERN, Switzerland
        </div>
        <div className="start_end_date">
          April 2018 - Present
        </div>
        <div className="job_description">
          <div>
            Maintaining global file transfers between all distributed CMS sites using CMS ' transfer system PhEDEx, the dynamic data management layer (DDM), the WAN file access infrastructure.
          </div>
          <div>
            Maintaining consistency of all files on all storage systems.
          </div>
          <div>
            Involved technologies: Python,shell scripting, JavaScript, ReactJS
          </div>
        </div>
      </div>
    );
  }
}

export default Work1;
