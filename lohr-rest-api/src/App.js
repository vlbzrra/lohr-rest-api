import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListRegComponent from './components/ListRegComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import FormRegComponent from './components/FormRegComponent';
import ViewRegComponent from './components/ViewRegComponent';

import './App.scss';

class App extends Component{
  render() {
    return (
      <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path = "/" exact component = {ListRegComponent}></Route>
              <Route path = "/regs" component = {ListRegComponent}></Route>
              <Route path = "/form-reg/:id" component = {FormRegComponent}></Route>
              <Route path = "/view-reg/:id" component = {ViewRegComponent}></Route>
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>  
    );
  }
}

export default App;
