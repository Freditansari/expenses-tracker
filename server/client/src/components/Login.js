import React, { Component } from 'react'

import { Card, Container, Button, Form, Row, Col} from 'react-bootstrap';
import {loginUser} from '../redux/actions/authActions';
import {connect} from 'react-redux';


class Login extends Component {
    constructor(){
        super();
        this.state ={
            email:'',
            password:'',
            errors:{}
        }
    }

    componentDidMount(){
        //if the redux state isAuthenticated=== true then push the route to dashboard
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps){
        //if nextProps is authenticated then push user to dashboard. 
        //else if nextprops is errors then set state to errors
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }

        if(nextProps.errors){
            this.setState({errors: nextProps.errors})
        }
    }

    onChange =(e) =>{
        this.setState({[e.target.name]: e.target.value});
    } 

    onSubmit=(e)=>{
        e.preventDefault();
        const userData ={
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);

    }
  render() {
     
    return (
        <Container>

            <Row>
                <Col>{' '}</Col>
                <Col>

                <Card body style={{ width: '20rem',marginTop:'2.5rem' }}>
                <Card.Title>Please Enter Your Credentials</Card.Title>

                <Container>
                        <Form onSubmit={this.onSubmit}>
                        <Container >
                        <Form.Group controlId="formBasicEmail">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control name="email" type="email" onChange={this.onChange} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control name="password" type="password" onChange={this.onChange} placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="stay logged in" />
                        </Form.Group>
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
 

               
 
     
    )
  }
}


const mapStateToProps= state =>({
    auth: state.auth,
    errors: state.errors
})
export default connect(mapStateToProps ,{loginUser})(Login);
