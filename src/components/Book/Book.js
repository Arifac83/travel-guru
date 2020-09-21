import React, { useContext } from 'react';
import './Book.css';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Book = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const onSubmit = data =>{
        console.log('form submitted',data);
  
    }    
    return (
     <Container className="book-container">
         <Row>
             <Col className="book-left">
                <h1>COX'S BAZAR</h1>
                <p>  Cox's Bazar  is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach..
                </p>
             </Col>
             <Col className="book-right">
                <form className="book-form" onSubmit={handleSubmit(onSubmit)}>   
                     
                    <input name="Origin" defaultValue={loggedInUser.origin} ref={register({ required: true })} placeholder="Origin"/> 
                    {errors.origin && <span className="error"> Origin is required</span>}      
                
                    <input name="Destination" defaultValue={loggedInUser.detination} ref={register({ required: true })} placeholder="Destination"/> 
                    {errors.destination && <span className="error"> Destination is required</span>} <br/>                     
                    <h6>Form</h6>
                    <input type="date" ref={register({ required: true })} placeholder="Form"/> 
                    {errors.form && <span className="error"> Date is required</span>}   <br/>                
                    <h6>To</h6>
                    <input type="date" ref={register({ required: true })} placeholder="To"/> 
                    {errors.form && <span className="error"> Date is required</span>} 
                    <br/>
                    <Link to="/hotel">
                        <Button variant="warning"> Start Booking </Button>
                    </Link>
                </form>
             </Col>
         </Row>
        
     </Container>
  
    );
};


export default Book;