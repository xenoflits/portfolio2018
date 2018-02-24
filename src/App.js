import React, { Component } from 'react';
import './App.css';
//components
import Nav from './components/nav/nav'
import Header from './components/header/header'
import SectionAbout from './components/section-about/section-about'
import SectionResume from './components/section-resume/section-resume'
import SectionPortfolio from './components/section-portfolio/section-portfolio'
import Footer from './components/footer/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Nav />
          <Header />
          <SectionAbout />
          <SectionResume />
          <SectionPortfolio />
          <Footer />
        </div>
      </div >
    );
  }
}

export default App;
