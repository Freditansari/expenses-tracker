import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { Container, Row, Col} from 'react-bootstrap';

const ExpenseListItem = ({id , user, description, amount, expenseDate}) => {
  return (
    <div>
        <Link className="list-item" to={`/edit/${id}`}>
            <div>
                {/* use list group */}
                <Container style={{marginTop:'2.5rem'}}>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Row>
                            <Col>
                                <span className="h3">Coffee</span> <br/>
                                <small className="text-muted">Aug 12, 2019</small>
                               
                            </Col>
                            <Col>
                                <span className="align-right h3"> $1,000,000.00</span>
                            </Col>
                         
                            
                        </Row>
                        
                    </li>
                  
              
                   
                </ul>    
                
                </Container>
               
            </div>
        </Link>
      
    </div>
  )
}

export default ExpenseListItem
