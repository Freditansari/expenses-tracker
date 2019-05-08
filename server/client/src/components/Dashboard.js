import React, { Component } from 'react';

import ExpenseFilters from './ExpenseFilters';
import ExpenseListItem from './ExpenseListItem';
import {Link} from 'react-router-dom'; 

import JumbotronHeader from './JumbotronHeader';
import getFilteredExpenses from './getFilteredExpenses'
import {connect} from 'react-redux';
import {getAllExpenses} from '../redux/actions/expenseActions'



class Dashboard extends Component {


  


  render() {
    return (
      <div>
        <JumbotronHeader potato = {this.props.expenses} />

        
          <ExpenseFilters />
      
        
        <ExpenseListItem />
          
        
      </div>
    )
  }
}
const mapStateToProps = (state) =>({
  filters: state.filters,
  errors: state.error,
  expenses: getFilteredExpenses(state.expenses, state.filters)

})
export default connect(mapStateToProps, {getAllExpenses})(Dashboard);

