import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
              <p className="lead">The whole point of getting things done is knowing what to leave undone. <br/>Oswald Chambers
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}