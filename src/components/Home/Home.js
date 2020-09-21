import { Button,Col, Row } from "react-bootstrap";
import React from "react";
import { Container } from "react-bootstrap";
import img1 from "../../image/img/coxsbazar.png";
import img2 from "../../image/img/sreemangal.png";
import img3 from "../../image/img/sundarban.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import home from "../../image/img/coxbazar1.png";

import './Home.css'

const Home = () => {
  return (
    <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${home})` }} className="home">
    <Container className="home-container text-white">

      <Row>        
          <Col className="pt-5 mt-4">
            <h1>COX'S BAZAR</h1>
            <p>Cox's Bazar is a city, fishing port, tourism centre and district
              headquarters in southeastern Bangladesh. It is famous mostly for
              its long natural sandy beach..</p>
            <Link to="/book">
              <Button variant="warning">Booking <ArrowForwardIcon ></ArrowForwardIcon></Button>  
            </Link>             
          </Col>          
          <Col>
          <img src={img1} alt="" />
          <h1>COX'S BAZAR</h1>          
          </Col>
          <Col>
          <img src={img2} alt="" />
          <h1>SREEMANGAL</h1>       
          </Col>
          <Col>
          <img src={img3} alt="" />
          <h1>SUNDARBANS</h1>          
          </Col>                 
      </Row>
    </Container>
    </div>
  );
};

export default Home;
