import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li><a href="https://plus.google.com/114065439094218148207"><i className="fa fa-google-plus" /></a></li>
                <li><a href="https://www.linkedin.com/in/sagdi-formanov"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://www.instagram.com/sagdish/"><i className="fa fa-instagram" /></a></li>  
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}