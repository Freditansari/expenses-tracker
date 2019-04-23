import {Jumbotron, Card, Container, CardColumns, Button} from 'react-bootstrap';
import React, { Component } from 'react';
import mern from '../img/mern.jpg'
import expense from '../img/expense.jpeg';

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

        <Container>
         <CardColumns>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={mern} />
            
            <Card.Body>
                <Card.Title>Built with MERN stack</Card.Title>
                <Card.Text>
                MERN stack stands from Mongodb Express React and Node.JS. MERN stacks cuts software development lifecycle significantly
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={expense} />
            
            <Card.Body>
                <Card.Title>Track your expenses per user</Card.Title>
                <Card.Text> 
                With Expense tracker you can track and control each user's expense.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card>
          

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={expense} />
            
            <Card.Body>
                <Card.Title>Lorem ipsum</Card.Title>
                <Card.Text> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, deserunt quibusdam. Pariatur blanditiis distinctio iste harum aspernatur! 
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card>
          

            </CardColumns>
            </Container>
            
          
         


      </div>
    )
  }
}
