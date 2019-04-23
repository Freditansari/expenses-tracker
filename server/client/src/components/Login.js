import React, { Component } from 'react'

import { Card, Container, Button, Form, Row, Col} from 'react-bootstrap';


class Login extends Component {
  render() {
     
    return (
        <Container>

            <Row>
                <Col>{' '}</Col>
                <Col>

                <Card body style={{ width: '25rem',marginTop:'2.5rem' }}>
                <Card.Title>Please Enter Your Credentials</Card.Title>

                <Container>
                        <Form>
                        <Container >
                        <Form.Group controlId="formBasicEmail">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control type="password" placeholder="Password" />
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

export default Login