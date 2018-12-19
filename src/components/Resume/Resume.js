import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Lambda School</h3>
                <p className="info">Graduate</p>
                <p>
                Immersive Full-Stack Web & Computer Science program
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Technische Universität Dresden</h3>
                <p className="info">Postgraduate education</p>
                <p>
                Mechatronics, Robotics, and Automation Engineering
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Tashkent Automobile and Road Construction Institute</h3>
                <p className="info">Bachelor's degree </p>
                <p>
                  Automotive Engineering Technology
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
       <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="info">
            <h4>
            JavaScript<br/> - Node.js  - React.js -  Responsive - Web Design - Front-end Development -
            User Experience - MongoDB - HTTP/AJAX
            </h4>
          </div>

        </div> {/* main-col end */}
      </div>
        
      </section>
      </React.Fragment>
    );
  }
}