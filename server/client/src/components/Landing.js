import {Jumbotron, Card, Container, CardColumns, Button} from 'react-bootstrap';
import React, { Component } from 'react';
import mern from '../img/mern.jpg'
import expense from '../img/expense.jpeg';
import { MDBContainer, MDBRow, MDBCol,MDBCard, MDBCardImage,MDBCardBody, MDBCardTitle,MDBCardText, MDBBtn} from 'mdbreact';

export default class Landing extends Component {
  render() {
      
     
    return (
      <div className="page-header muted">
          <Jumbotron className="jumbotron jumbotron-fluid bg-info text-white text-center" >
             <div className="container text-white">
                <h1>Welcome to Expense Tracker</h1>
                <p className="lead">Take back control of your expenses</p>
             </div>
          </Jumbotron>
        
        <MDBContainer>
          <MDBRow>
          <MDBCol>
            <MDBCard >
              <MDBCardImage className="img-fluid" src={mern} waves />
              <MDBCardBody>
                <MDBCardTitle>Built with MERN stack</MDBCardTitle>
                <MDBCardText>
                MERN stack stands from Mongodb Express React and Node.JS. MERN stacks cuts software development lifecycle significantly
                </MDBCardText>
               
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol>
            <MDBCard >
              <MDBCardImage className="img-fluid" src={expense} wwaves />
              <MDBCardBody>
                <MDBCardTitle>Track your expenses per user</MDBCardTitle>
                <MDBCardText>
                With Expense tracker you can track and control each user's expense. This means lower administration costs and complete control over your finance
                </MDBCardText>
              
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol>
            <MDBCard >
              <MDBCardImage className="img-fluid" src={expense} waves />
              <MDBCardBody>
                <MDBCardTitle>Multi-Tenant Application</MDBCardTitle>
                <MDBCardText>
                   this project is a proof of concept for a multi-tenant application where we can host thousands of user without leaking access to each other user. 
                </MDBCardText>
                
              </MDBCardBody>
            </MDBCard>
        </MDBCol>

          </MDBRow>

        </MDBContainer>

        {/* <Container>
         <CardColumns>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={mern} />
            
            <Card.Body>
                <Card.Title>Built with MERN stack</Card.Title>
                <Card.Text>
                MERN stack stands from Mongodb Express React and Node.JS. MERN stacks cuts software development lifecycle significantly
                </Card.Text>
               
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={expense} />
            
            <Card.Body>
                <Card.Title>Track your expenses per user</Card.Title>
                <Card.Text> 
                With Expense tracker you can track and control each user's expense.
                </Card.Text>
              
            </Card.Body>
            </Card>
          

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={expense} />
            
            <Card.Body>
                <Card.Title>Lorem ipsum</Card.Title>
                <Card.Text> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, deserunt quibusdam. Pariatur blanditiis distinctio iste harum aspernatur! 
                </Card.Text>
              
            </Card.Body>
            </Card>
          

            </CardColumns>
            </Container> */}
            
          
         


      </div>
    )
  }
}
