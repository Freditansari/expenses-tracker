import React, { Component } from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBCol } from "mdbreact";
import {getAllExpenses} from '../redux/actions/expenseActions'
import {connect} from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';
import getFilteredExpenses from './getFilteredExpenses'

 class ExpenseListItem extends Component {
  componentDidMount(){
    const expenseFilters ={
      from: this.props.filters.from,
      to: this.props.filters.to
    }
    this.props.getAllExpenses(expenseFilters);

   

  }

 
  render() {
    return (
      <div className="row d-flex justify-content-center mt-3">
        <div className="col-md-7">
        <MDBContainer fluid>
          
          <MDBListGroup > 
           
            {
              this.props.expenses.length ===0?
              (
                  <div>
                    <span>No expenses available</span>
                    <div class="spinner-border text-primary" role="status">
                      <p><span class="sr-only">Loading...</span></p>
                    </div>
                  </div>
              ):
              (

                this.props.expenses.map((expense) =>{
                  return(
                    <MDBListGroupItem href="#">
                    <div className="row">
                    <div className="col-md-6 justify-content-start">
                      <span className="h3">{expense.description}</span>
    
                      <div className="row d-flex justify-content-center">
                        <div className="col-md-4">
                        <small className="text-muted">{moment(expense.expenseDate).format('Do MMMM, YYYY')}</small>
                        </div>
                      
                      </div>
                     
                    </div>
                    <div className="col-md-3 justify-content-end">
                      <span className="align-right h3"> {numeral(expense.amount/100).format('$0,0.00')}</span>
                    </div>
                  
                  
                    </div>
                    </MDBListGroupItem>
                  )
             

                }
              

              )
              )
            }
              
               

            
         
          </MDBListGroup>
          
        </MDBContainer>
        
        </div>
      
    
      </div>
          
        
      
    )
  }
}

const mapStateToProps = (state) =>({
    filters: state.filters,
    errors: state.error,
    expenses: getFilteredExpenses(state.expenses, state.filters)

})
export default connect(mapStateToProps, {getAllExpenses})(ExpenseListItem);
