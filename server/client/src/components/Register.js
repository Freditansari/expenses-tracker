import React, { Component } from 'react'
import { Card, Container, Button, Form, Row, Col} from 'react-bootstrap';
import {registerUser} from '../redux/actions/authActions';
import {connect} from 'react-redux';

class Register extends Component {
  constructor(){
    super();
    this.state ={
      name:'',
      email:'',
      password:'',
      password2:'',
      errors:{}
    }
  }

  onSubmit =(e) =>{
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    

    this.props.registerUser(newUser, this.props.history)
  }

 onChange =(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  render() {
    return (
      <div>
     <Container>

        <Row>
            <Col>{' '}</Col>
            <Col>

            <Card body style={{ width: '20rem',marginTop:'2.5rem' }}>
            <Card.Title>You can register here</Card.Title>

            <Container>
                    <Form onSubmit ={this.onSubmit}>
                    <Container >
                    <Form.Group controlId="formBasicName">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="text" name="name" onChange={this.onChange} value ={this.state.name} placeholder="please enter your name" />
                    </Form.Group>

                    
                    <Form.Group controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control name ="email" type="email" onChange={this.onChange} value ={this.state.email} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control name ="password" type="password" onChange={this.onChange} value ={this.state.password} placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword2">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control name ="password2" type="password" onChange={this.onChange} value ={this.state.password2} placeholder="Please re-enter your password" />
                    </Form.Group>
                
                    <Button variant="primary" type="submit">
                        Register User
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
  auth: state.auth
});

export default connect(mapStateToProps, {registerUser}) (Register);
