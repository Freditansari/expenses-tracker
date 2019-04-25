import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <div className="container">
         <Navbar.Brand href="/">Expense-Tracker</Navbar.Brand>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
          
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/dashboard">Expenses</Nav.Link>
  
        <NavDropdown title="User" id="collasible-nav-dropdown">
        
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
            <NavDropdown.Item href="/register">Register</NavDropdown.Item>
            <NavDropdown.Divider />
        <NavDropdown.Item href="/expense">Separated link</NavDropdown.Item>
       
      </NavDropdown>
    </Nav>
        </Navbar.Collapse>
        </div>
        </Navbar>
        
      
    )
  }
}

export default Header;
