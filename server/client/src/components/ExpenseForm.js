import React, { Component } from 'react'

class ExpenseForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          description: props.expense ? props.expense.description : '',
          note: props.expense ? props.expense.note : '',
          amount: props.expense ? (props.expense.amount / 100).toString() : '',
          createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
          calendarFocused: false,
          error: ''
        };
      }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default ExpenseForm;