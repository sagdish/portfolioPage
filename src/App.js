import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Router>
            <Switch>
              <>
                <Header />
                <About resumeData={resumeData} />
                <Resume />
                <ContactUs />
                <Footer />
              </>
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
