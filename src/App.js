import React from 'react';
import './App.css';
import indexMain from './pages/IndexMain'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={indexMain}/>
        <Route path='projects' exact component={Projects}/>
        <Route path='contact' exact component={Contact}/>
        <Route path='/' exact component={About}/>
      </Switch>
    </div>
  );
}

export default App;
