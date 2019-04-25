import React, { Component } from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

import moment from 'moment';
import {Jumbotron, Button, Container, Row, Col, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';
import 'react-dates/lib/css/_datepicker.css'




export default class ExpenseFilters extends Component {
    state = {
        startDate: moment().subtract(2, "month"),
        endDate: moment(),
        focusedInput: null
      };
      handleDateChange = ({ startDate, endDate }) =>
      this.setState({ startDate, endDate });
  
      handleFocusChange = focusedInput => this.setState({ focusedInput });
  
      isOutsideRange = () => false;

  render() {
    
    return (
      <div>
           <Row>
            <Col>
                <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup>
              
            </Col>
            <Col>
              <DropdownButton id="dropdown-item-button" title="Sort Expenses By">
                <Dropdown.Item as="button">Date</Dropdown.Item>
                <Dropdown.Item as="button">Amount</Dropdown.Item>
               
              </DropdownButton>
            </Col>

            <Col>
                <DateRangePicker
                    endDate={this.state.endDate}
                    endDateId="endDate"
                    focusedInput={this.state.focusedInput}
                    isOutsideRange={()=> false}
                    onDatesChange={this.handleDateChange}
                    onFocusChange={this.handleFocusChange}
                    startDate={this.state.startDate}
                    startDateId="startDate"
                    showClearDates={true}
                    numberOfMonths={1}
                />
            
            </Col>
            </Row>
      </div>
    )
  }
}
