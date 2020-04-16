import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ReactCalender from './calender';

import Navbar from './components/navbar';
import Home from './Home';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/Cal1" component={ReactCalender} />
      </Switch>
    </div>
  );
}

export default App;
