import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './shared/Nav';
import './App.css';
import TransitionedPage from './shared/TransitionedPage';
import Profile from './features/Profile';
import Portfolio from './features/Portfolio';
import Contact from './features/Contact';
import Skills from './features/Skills';
import Certifications from './features/Certifications';
import Education from './features/Education';

function App() {
  return (
    <Nav>
      <Switch>
          <Route exact path="/" component={TransitionedPage(Profile)} />
          <Route path="/portfolio" component={TransitionedPage(Portfolio)}/>
          <Route path="/contact" component={TransitionedPage(Contact)}/>
          <Route path="/skills" component={TransitionedPage(Skills)}/>
          <Route path="/certifications" component={TransitionedPage(Certifications)}/>
          <Route path="/education" component={TransitionedPage(Education)}/>
      </Switch>
    </Nav>
  );
}

export default App;
