import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import logo from '../../image/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header-container">          
            <Navbar   variant="light">
                <Navbar.Brand className="logo" href="#home"><img src={logo} alt=""/></Navbar.Brand>
                <Form inline>
                <FormControl type="text" placeholder="Search your Destination..."
                 className="mr-sm-2" />                
                </Form>
                <Nav className="nav ml-auto">
                <Nav.Link href="">News</Nav.Link>
                <Nav.Link href="">Destination</Nav.Link>
                <Nav.Link href="">Blog</Nav.Link>
                <Nav.Link href="">Contact</Nav.Link>      
                <Link to="/login">
                <Button variant="outline-primary" className="logBtn">Login</Button>  
                </Link>        
                       
                </Nav>
                
            </Navbar>           
        </div>
    );
};

export default Header;