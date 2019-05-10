import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getAllExpenses} from '../redux/actions/expenseActions';
import ExpenseForm from './ExpenseForm';
import {MDBBtn, MDBIcon} from'mdbreact'

class EditExpense extends Component {
//todo do update dispatch and delete dispatch



  render() {

  return (
   
        
      <div>
         
  
         
        <ExpenseForm expense={this.props.expense} />
        <MDBBtn color="red">
        <MDBIcon icon="far fa-trash-alt" className="mr-1" /> Delete
        </MDBBtn>
       
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
