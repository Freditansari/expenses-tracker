import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {connect} from 'react-redux';
import {logoutUser} from '../redux/actions/authActions'
/**
 * note: we cannot use this react bootstrap component because it causes the page to refresh entirely
 * 
 */
class Header extends Component {
    onLogout = (e)=>{
        e.preventDefault();
        this.props.logoutUser();
        window.location.href ='/';

        
            
    }
 
  render() {

    return (
      
    //     <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      
    //      <Navbar.Brand href="/">Expense-Tracker</Navbar.Brand>
      
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //         <Nav className="mr-auto">
          
    //         <Nav.Link href="/login">Login</Nav.Link> 
    //         <Nav.Link href="/dashboard">Expenses</Nav.Link>
    //         {/* <Link to="/login">Login</Link>
    //         <Link to="/dashboard">Dashboard</Link> */}
         
  
    //     <NavDropdown title="User" id="collasible-nav-dropdown">
        
    //         <NavDropdown.Item href="/login">Login</NavDropdown.Item>
    //         <NavDropdown.Item onClick={this.onLogout}>Logout</NavDropdown.Item>
    //         <NavDropdown.Item href="/register">Register</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //     <NavDropdown.Item href="/expense">Separated link</NavDropdown.Item>
       
    //   </NavDropdown>
    // </Nav>
    //     </Navbar.Collapse>
  
    //     </Navbar>
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <Link className="navbar-brand">Expense-Tracker</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      {/* <li class="nav-item active"> */}
      <li class="nav-item ">
        {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
        <Link className="nav-link" to="/login" >Login</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/dashboard">Expense</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/placeholder">potato sales</Link>
      </li>
      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
      {/* <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
</div>
 
      
    )
  }
}

const mapStateToProps = state =>({
    auth: state.auth, 
    expense: state.expenses
  
})

export default connect(mapStateToProps,{logoutUser})(Header);
