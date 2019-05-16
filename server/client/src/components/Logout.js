import React, { Component } from 'react'
import {connect} from "react-redux";
import {logoutUser} from '../redux/actions/authActions'



 class Logout extends Component {
    componentDidMount() {

        this.props.logoutUser();
        
    }
  render() {
    return (
      <div>
          <h1>You have been logged out.</h1>
          <h3>Thank you for using our services</h3>
        
      </div>
    )
  }
}


const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps,{logoutUser}) (Logout)
