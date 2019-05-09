import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import { Container} from 'react-bootstrap';
import {Provider} from 'react-redux';
import jwt_decode from 'jwt-decode';


import './App.css';
import Header from './components/Header';
import Landing from './components/Landing'
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import ExpenseListItem from './components/ExpenseListItem';

import setAuthToken from './utils/setAuthToken';
import store from './store';
import { setCurrentUser, logoutUser } from './redux/actions/authActions';
import AddExpense from './components/AddExpense';
import placeholder from './components/placeholder';
import EditExpense from './components/EditExpense';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



if(localStorage.jwtToken){
  /**
   * perform check whether auth token exists or not in local storage.
   * if exists then set current user into the redux state. 
   * it also checks whether the time expired or not. 
   * if it expires it deletes the localstorage 
   */
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);


    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() /1000;

    if(decoded.exp < currentTime){
      store.dispatch(logoutUser());
      window.location.href ='/login';
   
    }


}

class App extends Component {
  render() {
    return (
      <div className="App">

        <Provider store ={store}>
        
         
        
        
        
          <Router>
            <div>
                <Header />  
            
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={Register} />
                {/* <Route exact path="/expense" component={ExpenseListItem} /> */}
                <Route exact path="/addexpense" component={AddExpense} />
                <Route exact path="/placeholder" component={placeholder} />
                <Route exact path="/edit/expenses/:id" component={EditExpense} />
            </div>
            </Router>

          
     
          </Provider>  
       
        
      </div>
    );
  }
}

export default App;
