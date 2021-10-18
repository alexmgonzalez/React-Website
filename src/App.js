import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import AboutMe from './Components/pages/Aboutme';
import Resume from './Components/pages/Resume';
import Projects from './Components/pages/Projects';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path = '/React-Website/' exact component={Home} />
        <Route path = '/about-me' exact component={AboutMe} />
        <Route path = '/resume' exact component={Resume} />
        <Route path = '/projects' exact component={Projects} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
