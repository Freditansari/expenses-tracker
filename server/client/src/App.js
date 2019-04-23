import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container} from 'react-bootstrap';


import './App.css';
import Header from './components/Header';
import Landing from './components/Landing'
import Login from './components/Login'
import Dashboard from './components/Dashboard';

//todo add provider 
//add router


class App extends Component {
  render() {
    return (
      <div className="App">
      
        
          <Header />
        
        
          <Router>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            

          </Router>
     
    
       
        
      </div>
    );
  }
}

export default App;
