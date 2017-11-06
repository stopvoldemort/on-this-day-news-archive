import React, { Component } from 'react';
import './App.css';
import NewsContainer from './components/NewsContainer'
import About from './components/About'
import NavBar from './components/NavBar'
import {Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={NewsContainer}/>
        <Route exact path="/about" component={About}/>
      </div>
    );
  }
}

export default App;
