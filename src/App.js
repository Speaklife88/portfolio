import React, { Component } from 'react';
import  GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import { Navbar, Footer }  from './components';


class App extends Component {
  render() {
    return (
      
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch >
          <Route  path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
      
    );
  }
}

export default App;
