import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { Col, Row } from 'react-bootstrap';
import ContactsIcon from '@material-ui/icons/Contacts';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import logo from '../../image/logo5.png';


const Footer = () => {
    return (
        <div className="footer-container">         
            <Row>
                <Col>
                    <div className="footer-logo" >
                        <img src={logo} alt="" />
                    </div>                
                </Col>   
                <Col>
                 <ul className="single-footer" >
                    <li><a href="#contact"><ContactsIcon ></ContactsIcon></a>  Contact Us</li>                    
                    <li><a href="#phone"><PhoneIcon></PhoneIcon></a> +88 01710112233 </li>
                    <li><a href="#email"><EmailIcon></EmailIcon></a> arif@gmail.com</li>
                    <li><a href="#website"><LanguageIcon></LanguageIcon>
                    </a>  www.travel-guru.com</li>                    
                </ul>                
                </Col>  
                <Col>
                 <ul className="single-footer" >
                    <li><a href="#aboutOnlineTravels">About online Travrls</a></li>
                    <li><a href="#ReadOurBlog">Read our blog</a></li>
                    <li><a href="#signUpToDeliver">Sign up to deliver</a></li>
                    <li><a href="#AddYourTravels">Add your Travels</a></li>
                                       
                </ul>                
                </Col>   
                <Col>
                 <ul className="single-footer" >
                 <li><a href="#getHelp">Get help </a></li>
                    <li><a href="#faqs">Read FAQs</a></li>
                    <li><a href="#viewAllCities">View all cities</a></li>
                    <li><a href="#TravelsNearMe">Travels near me</a></li>                
                </ul>                
                </Col>              
            </Row>    
            <Row>
                <Col className="footer-left">
                    <h6> All Rights Reserved &copy;2020 Travel Guru,By Arif</h6>
                </Col>
                <Col>
                    <ul className="footer-right">
                        <li><a href="#privacyPolicy">Privacy Policy</a></li>
                        <li><a href="#termsOfUse">Terms of Use</a> </li>
                        <li><a href="#pricing">Pricing</a> </li>
                        <li><a href="#facebook"><FacebookIcon></FacebookIcon></a> </li>
                        <li><a href="#twitter"><TwitterIcon></TwitterIcon></a> </li>
                        <li><a href="#linkedIn"><LinkedInIcon></LinkedInIcon></a> </li>                    
                        <li><a href="#youTube"><YouTubeIcon></YouTubeIcon></a> </li>                    
                    </ul>
                </Col>
            </Row>
            
        </div>
    );
};

export default Footer;