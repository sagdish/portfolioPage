import React, { Component } from 'react';
import Resume from '../FormanovResume.pdf';

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <br/>
              <h2><a href={Resume} className="myResume" target="_blank" rel="noopener noreferrer">View Resume</a></h2>
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
              Passionate about new technologies. 
              <br/>Keeping up with the dynamic pace of 
              <br/>software development.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  {/* <h2>Contact Details</h2> */}
                  <p className="address">
                    <span>sagdish@gmail.com</span>
                  </p>
                  
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}