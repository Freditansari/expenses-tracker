import React, { Component } from 'react';
import {Jumbotron, Button, Container, Row, Col, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';
import ExpenseFilters from './ExpenseFilters';
import ExpenseListItem from './ExpenseListItem';



export default class Dashboard extends Component {

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="text-white">Viewing 4 expense(s) with total of: $ 4,000 </h1>
          <Button>Add Expense</Button>
        </Jumbotron>
        <Container>
          <ExpenseFilters />
      
        </Container>
        <ExpenseListItem />
          
        
      </div>
    )
  }
}
