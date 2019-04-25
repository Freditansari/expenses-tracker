import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container} from 'react-bootstrap';
import {Provider} from 'react-redux';


import './App.css';
import Header from './components/Header';
import Landing from './components/Landing'
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import ExpenseListItem from './components/ExpenseListItem';

import store from './store';

//todo add provider 
//add router


class App extends Component {
  render() {
    return (
      <div className="App">

        <Provider store ={store}>
        
          <Header />
        
        
          <Router>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/expense" component={ExpenseListItem} />
            

          </Router>
     
          </Provider>  
       
        
      </div>
    );
  }
}

export default App;
