import React, { Component } from 'react';
import  GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar}  from './components';


class App extends Component {
  render() {
    return (
      
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch />
        <Route  path="/" />
      </ Router>
      
    );
  }
}

export default App;
