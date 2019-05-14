import React, { Component } from 'react';
import {connect} from 'react-redux';
import {removeExpense, editExpense} from '../redux/actions/expenseActions';
import ExpenseForm from './ExpenseForm';
import {MDBBtn,  MDBContainer, MDBRow, MDBCol, MDBInput,  MDBCard, MDBCardBody, MDBIcon, MDBCardTitle, MDBCardText} from'mdbreact';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

class EditExpense extends Component {

  constructor(props) {
    super(props);


    
        this.state = {
          _id: props.expense._id? props.expense._id:'',
          description: props.expense ? props.expense.description : '',
          notes: props.expense ? props.expense.notes : '',
          amount: props.expense ? (props.expense.amount / 100).toString() : '',
          expenseDate: props.expense ? moment(props.expense.expenseDate) : moment(),
          calendarFocused: false,
          user: "",
          error: ''
        };
    
      
    
    
  }


//todo do update dispatch and delete dispatch

  deleteClickHandler =() =>{
    this.props.removeExpense((this.props.match.params.id));
    this.props.history.push('/dashboard');

  }


  onDateChange = (expenseDate) => {
    if (expenseDate) {
      this.setState(() => ({ expenseDate }));
    }
  };

  onChange =(e) =>{
    this.setState({[e.target.name]: e.target.value});
  } 




  onAmountChange = (e) => {
    const amount = e.target.value;


    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
          this.setState(() => ({ amount }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.editExpense({
        _id: this.state._id,
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        expenseDate: this.state.expenseDate.valueOf(),
        notes: this.state.notes
      
      });
      this.props.history.push('/dashboard');
    }
  };


  render() {
    
  return (

   
        
      <div>
         <h3 className="mt-3">Edit Expense</h3>
          {/* insert edit form here!  */}

          <div>
               <MDBContainer>

             
 
                <form onSubmit={this.onSubmit}>
                  <MDBCol>
                      <MDBCard>
                        
                          <MDBCardBody>
                        
                          <MDBCardText>
                          


                          <MDBRow>
          
                              <MDBCol>
                                  <MDBInput name="description" label="Please enter the expense description" value={this.state.description} onChange={this.onChange} icon="question" containerClass="text-left"/>

                              </MDBCol>

                          </MDBRow>



                          <MDBRow>
                              
                              <MDBCol>
                                  <MDBInput value={this.state.amount} name="amount" icon="dollar-sign" containerClass="text-left" onChange={this.onAmountChange} label="Please enter the amount"/>

                              </MDBCol>

                          </MDBRow>


                

                        

                          <MDBRow>
                              <MDBCol><label>Please enter the expense date: </label></MDBCol>
                              

                          </MDBRow>

                          <MDBRow>
                            
                              <MDBCol>
                              <SingleDatePicker 
                                    date ={this.state.expenseDate}
                                    onDateChange={this.onDateChange}
                                    focused = {this.state.calendarFocused}
                                    onFocusChange = {this.onFocusChange}
                                    numberOfMonths = {1}
                                    isOutsideRange ={()=>false}
                              />
                              </MDBCol>
                          </MDBRow>

                          <MDBRow>
                            
                              <MDBCol >
                              <MDBInput type="textarea" icon="pencil-alt" containerClass=
                              "text-left" name="notes" value={this.state.notes} onChange={this.onChange} label="please enter your notes" ></MDBInput>
                              </MDBCol>
                          </MDBRow>

                          <MDBBtn color='indigo' type="submit">Submit Expense</MDBBtn>

                      
                          </MDBCardText>
                        
                    
                          </MDBCardBody>
                      </MDBCard>
                  </MDBCol>
                  </form>
                  </MDBContainer>    

                  </div>


          {/* to here */}
        <MDBBtn onClick={this.deleteClickHandler}  color="red">
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


export default connect(mapStateToProps, {removeExpense, editExpense})(EditExpense);
