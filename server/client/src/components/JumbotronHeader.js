import React, { Component } from 'react';
import {connect} from 'react-redux'
import {MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCardTitle, MDBBtn, MDBIcon} from 'mdbreact';
import numeral from 'numeral'

import getFilteredExpenses from './getFilteredExpenses'

 class JumbotronHeader extends Component {
  render() {
    const expensesTotal =(expenses) =>{
      //the 0 is important otherwise it will crash
      return expenses.reduce((accumulator, expense)=>accumulator+expense.amount,0)
  }
    return (
      <div>
    <MDBContainer>
      <MDBJumbotron>
      <MDBCardBody>
              <MDBCardTitle className="white-text font-weight-bold h2">
                    
                    Viewing {this.props.potato.length} {this.props.potato.length >1? "expenses":"expense" } with total of: {numeral(expensesTotal(this.props.potato)/100).format('$0,0.00')}
              </MDBCardTitle>
              
              
              <hr className="my-4" />
              <div className="pt-2">
                <MDBBtn
                  color="primary"
                  className="waves-effect"
                  href="/addexpense"
                >
                  Add Expense
                </MDBBtn>
              
              </div>
            </MDBCardBody>

      </MDBJumbotron>
    
    </MDBContainer>
      
          
        
      </div>
    )
  }
}


export default  (JumbotronHeader)
