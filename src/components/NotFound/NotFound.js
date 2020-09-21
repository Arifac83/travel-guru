import React from 'react';
import './NotFound.css';
import { Col, Row } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div className="notFound-container">            
            <Row>
                <Col>
                    <h1 className="notFound">
                        Soory, This Page Is Not Found ....!<br/>
                        Please, Try Again....!
                    </h1>
                </Col>
            </Row>
        </div>
    );
};

export default NotFound;

