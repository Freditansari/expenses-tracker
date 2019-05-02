import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {connect} from 'react-redux';
import {logoutUser} from '../redux/actions/authActions'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer
    } from "mdbreact";
/**
 * note: we cannot use this react bootstrap component because it causes the page to refresh entirely
 * note: bootstrap hamburger menu does not work on mobile
 * todo: bootstrap and mdbootstrap hamburger menu does not work. 
 * 
 */
class Header extends Component {

    state = {
      isOpen: false,
      collapseID: ''
    };
 
    onLogout = (e)=>{
        e.preventDefault();
        this.props.logoutUser();
        window.location.href ='/';

        
            
    }
    toggleCollapse = collapseID => () => {
    
      this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
    }
 
  render() {

    return (
        
     
        <MDBNavbar color="indigo" dark expand="md">
         <MDBContainer>
        <MDBNavbarBrand>
          <strong className="white-text">Expense Tracker</strong>
        </MDBNavbarBrand>
        {/* <MDBNavbarToggler onClick={this.toggleCollapse} /> */}
        <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse1')} />
        <MDBCollapse id="navbarCollapse1" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="/login">Login</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/dashboard">Expense</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/placeholder">placeholder</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Dropdown</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          {/* <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav> */}
        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      
    )
  }
}

const mapStateToProps = state =>({
    auth: state.auth, 
    expense: state.expenses
  
})

export default connect(mapStateToProps,{logoutUser})(Header);
