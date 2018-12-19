import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">Sagdi Formanov<br/> Моя звать Сагди</h1>
              <h3>I'm full stack <span>software engineer</span>, <span>graphic</span> and <span>webdesigner,</span> creating awesome and
                effective web applications of all sizes around the globe. You can find out <a className="smoothscroll" href="#about">more about me</a>.</h3>
              <hr />
              <ul className="social">
                <li><a href="https://plus.google.com/114065439094218148207" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus" /></a></li>
                <li><a href="https://www.linkedin.com/in/sagdi-formanov" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://www.instagram.com/sagdish/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}