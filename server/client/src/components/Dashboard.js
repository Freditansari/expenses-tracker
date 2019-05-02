import React, { Component } from 'react';
import {Jumbotron, Button, Container, Row, Col, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';
import ExpenseFilters from './ExpenseFilters';
import ExpenseListItem from './ExpenseListItem';
import {Link} from 'react-router-dom'



class Dashboard extends Component {
  componentWillMount(){
    console.log("banana");
  }
  componentWillUnmount(){
    console.log("potato")
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="text-white">Viewing 4 expense(s) with total of: $ 4,000 </h1>
          {/* <Button to="/addexpense">Add Expense</Button> */}
          <Link className="btn btn-primary " to="/addExpense"> Add Expense</Link>
        </Jumbotron>
        <Container>
          <ExpenseFilters />
      
        </Container>
        <ExpenseListItem />
          
        
      </div>
    )
  }
}

export default Dashboard
