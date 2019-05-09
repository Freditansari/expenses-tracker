import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getAllExpenses} from '../redux/actions/expenseActions';
import ExpenseForm from './ExpenseForm';

class EditExpense extends Component {




  render() {

  return (
   
        
      <div>
         
  
         
        <ExpenseForm expense={this.props.expense} />
       
      </div>
    )
  }
}

const mapStateToProps = (state, props) =>({
    expense: state.expenses.find((expense)=>{
        return expense._id ===props.match.params.id
    })
})


export default connect(mapStateToProps)(EditExpense);
