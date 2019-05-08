import React, { Component } from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon, MDBCardTitle, MDBCardText} from 'mdbreact';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import {connect} from 'react-redux'

class ExpenseForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          description: props.expense ? props.expense.description : '',
          note: props.expense ? props.expense.note : '',
          amount: props.expense ? (props.expense.amount / 100).toString() : '',
          createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
          calendarFocused: false,
          user: "",
          error: ''
        };
      }
      onDateChange = (createdAt) => {
        if (createdAt) {
          this.setState(() => ({ createdAt }));
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
          this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) * 100,
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
          
          });
        }
      };
  render() {
    return (
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
                          date ={this.state.createdAt}
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
                    "text-left" name="note" label="please enter your notes" ></MDBInput>
                    </MDBCol>
                </MDBRow>

                
                
                
               
                



               
                {/* <button className="btn btn-info indigo btn-block" type="submit">Submit Expense</button> */}
                <MDBBtn color='indigo' type="submit">Submit Expense</MDBBtn>

             
                </MDBCardText>
               
           
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </form>
        </MDBContainer>    

        </div>
     
      
       
    )
  }
}


const mapStateToProps = state =>({
    auth: state.auth,
    errors: state.error
  })
  export default connect(mapStateToProps)(ExpenseForm);