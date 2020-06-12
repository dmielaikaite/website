import React, { Component } from 'react';

class Work1 extends Component{
  render(){
    return (
      <div>
        <div className="title">
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
        <div className="description">
          <div>
            Maintaining global file transfers between all distributed CMS sites using CMS ' transfer system PhEDEx, Rucio, the dynamic data management layer (DDM), the WAN file access infrastructure.
          </div>
          <div>
            Managing and supporting the secure transfer of data from one storage(disk/tape) to another. 
          </div>
          <div>
            Responsible for the global implementation and configuration of transfer systems on CC7, SL6
          </div>      
          <div>
            Maintaining consistency of all files on all storage systems.
          </div>
          <div>
            Working with big data
          </div>
          <div>
            Manipulating datasets in Spark, Python(Pandas)
          </div>
          <div>
            Involved technologies: Python, Spark, Hadoop, shell scripting, JavaScript, ReactJS.
          </div>
        </div>
      </div>
    );
  }
}

export default Work1;
