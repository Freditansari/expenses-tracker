import ExpenseForm from './ExpenseForm';
import React, { Component } from 'react';
import {connect} from 'react-redux'
import store from '../store';
import {Card, Container} from 'react-bootstrap';
import {startAddExpense} from '../redux/actions/expenseActions'

 class AddExpense extends Component {
     //todo add a back button at the bottom

    constructor(){
        super();
        this.state={}
    }
    onSubmit =(expense)=>{
        
        this.props.startAddExpense(expense, this.props.history);

    }
  render() {
    return (
      <div >

       
          <h3 className="mt-3">Add Expense</h3>
    
          <ExpenseForm onSubmit = {this.onSubmit} />

      </div>
    )
  }
}

// const mapDispatchToProps =dispatch =>({
//     startAddExpense : (expense) => dispatch(startAddExpense(expense))
// })
const mapStateToProps = state =>({
    auth: state.auth,
    errors: state.error
})
export default connect(mapStateToProps, {startAddExpense})(AddExpense);