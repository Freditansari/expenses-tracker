import React, { Component } from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import {MDBContainer, MDBRow, MDBCol, MDBIcon, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem} from 'mdbreact';
import {connect} from 'react-redux';

import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../redux/actions/filtersActions';
import {getAllExpenses} from '../redux/actions/expenseActions'
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';





 class ExpenseFilters extends Component {
    state = {
     
        focusedInput: null
      };
      handleDateChange = ({ startDate, endDate }) =>{

        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate.endOf('day'));
        const expenseFilters ={
          from: this.props.filters.from,
          to: this.props.filters.to
        }
        this.props.getAllExpenses(expenseFilters);


      }
      
  
      handleFocusChange = focusedInput => this.setState({ focusedInput });
  
      isOutsideRange = () => false;

      onSortChange=(e)=>{
        const value = e.target.innerHTML;
        
        if(value==="Date"){
          this.props.sortByDate()
        }
        if(value==='Amount'){
          this.props.sortByAmount()
        }
      }
      onSearchTextChange = (e) =>{
       

        // console.log(e.target.value)
        this.props.setTextFilter(e.target.value);

      }

      onChange =(e) =>{
        this.setState({[e.target.name]: e.target.value});
      } 

  render() {
    
    return (
      <div>
      
         
                <MDBContainer>
                  <MDBRow className="align-baseline">
                    
                    <MDBCol md="4">    
                
                            <form className=" form-inline mt-2 mb-2">
                              <MDBIcon icon="search" />
                              <input className="form-control form-control-sm ml-3 w-75" onChange={this.onSearchTextChange} value={this.props.filters.searchText} type="text" placeholder="Search" aria-label="Search" />
                            </form>
                                              
                  </MDBCol>
                    <MDBCol md="4">

                        <MDBDropdown>
                          <MDBDropdownToggle caret color="primary">
                            Sort by
                          </MDBDropdownToggle>
                          <MDBDropdownMenu basic>
                            <MDBDropdownItem active ={this.props.filters.sortBy==="date"} onClick={this.onSortChange}>Date</MDBDropdownItem>
                            <MDBDropdownItem active ={this.props.filters.sortBy==="amount"}  onClick={this.onSortChange}>Amount</MDBDropdownItem>
                            
                          </MDBDropdownMenu>
                        </MDBDropdown>

                    </MDBCol>
                    <MDBCol md="4">

                      <DateRangePicker
                      endDate={this.props.filters.to}
                      endDateId="endDate"
                      focusedInput={this.state.focusedInput}
                      isOutsideRange={()=> false}
                      onDatesChange={this.handleDateChange}
                      onFocusChange={this.handleFocusChange}
                      startDate={this.props.filters.from}
                      startDateId="startDate"
                      showClearDates={false}
                      numberOfMonths={1}
                      size="sm"/>  
                    </MDBCol>
                   
                  
                  </MDBRow>
                </MDBContainer>


      </div>
    )
  }
}

const mapStateToProps =state=>({
    filters : state.filters,
    auth: state.auth
})

export default connect(mapStateToProps,  {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, getAllExpenses})( ExpenseFilters);
