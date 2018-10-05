import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Second  from './Second';
import Third from './Third';
import Home from './Home';
import Fourth from './Fourth';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
             <Route exact path='/' component={Home}></Route>
             <Route exact path='/second' component={Second}></Route> 
             <Route exact path='/third' component={Third}></Route> 
             <Route exact path='/fourth' component={Fourth}></Route> 
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
