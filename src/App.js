import React, { Component } from 'react';
import './App.css';
import NewsContainer from './components/NewsContainer'
import About from './components/About'
import NavBar from './components/NavBar'
import {Route, Redirect, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={NewsContainer}/>
          <Route path="/about" component={About}/>
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
