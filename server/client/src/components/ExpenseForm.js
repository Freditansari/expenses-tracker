import React, { Component } from 'react'
import moment from 'moment';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
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
            // user: this.props.auth.user.id.toString()
          });
        }
      };
  render() {
    return (
      <div>
            <Container>
              {/* <h1>this is from expense form</h1> */}

              <Row>
                  <Col>{' '}</Col>
                  <Col>

                  <Card body style={{ width: '20rem',marginTop:'2.5rem' }}>
               
                  

                  <Container>
                          <Form onSubmit={this.onSubmit}>
                          <Container >
                          <Form.Group controlId="formBasicDescription">
                      
                              <Form.Control name="description" type="text" value={this.state.description} onChange={this.onChange} placeholder="Your expense description" />
                       
                          </Form.Group>
                          <Form.Group controlId="formBasicAmount">
                              
                              <Form.Control name="amount" type="text" value={this.state.amount} onChange={this.onAmountChange} placeholder="Your expense amount" />
                      
                          </Form.Group>
            
                          <SingleDatePicker 
                          date ={this.state.createdAt}
                          onDateChange={this.onDateChange}
                          focused = {this.state.calendarFocused}
                          onFocusChange = {this.onFocusChange}
                          numberOfMonths = {1}
                          isOutsideRange ={()=>false}
                          /><br/>
                          <br/>
                         
                          


                          <Button variant="primary" type="submit">
                              Submit
                          </Button>
                          </Container>
                          
                          </Form>
                      
                      </Container>
                      
                      
                  </Card>       
                      </Col>
                  <Col>{' '}</Col>
              </Row>
            </Container>

        
      </div>
    )
  }
}

const mapStateToProps = state =>({
  auth: state.auth,
  errors: state.error
})
export default connect(mapStateToProps)(ExpenseForm);