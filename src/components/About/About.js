import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="Sagdi" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
              Passionate about new technologies. Trying to keep up with the pace of day by day software development.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Sagdi Formanov</span><br />
                    <span>150 Morning Sun Ave<br />
                      Mill Valley, CA 94941 US
                    </span><br />
                    <span>(415) 748-4885</span><br />
                    <span>sagdish@gmail.com</span>
                  </p>
                </div>
                {/* <div className="columns download">
                  <p>
                    <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div> */}
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}