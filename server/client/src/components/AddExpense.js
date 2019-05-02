import ExpenseForm from './ExpenseForm';
import React, { Component } from 'react';
import {connect} from 'react-redux'
import store from '../store';
import {Card, Container} from 'react-bootstrap';
import {startAddExpense} from '../redux/actions/expenseActions'

 class AddExpense extends Component {

    constructor(){
        super();
        this.state={}
    }
    onSubmit =(expense)=>{
        this.props.startAddExpense(expense, this.props.history);

    }
  render() {
    return (
      <div>

          <Container>
          <h3>Add Expense</h3>
    
          <ExpenseForm onSubmit = {this.onSubmit} />
          </Container>  
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