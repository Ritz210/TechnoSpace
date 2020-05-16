import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../App.css";
import Avatar from '@material-ui/core/Avatar';
import Logo from "../img/logowhite.png"
import  Facebook  from "../img/facebook.png";
import  Twitter  from "../img/twitter.png";
import  whatsapp  from "../img/whatsapp.png";
import Instagram  from "../img/instagram.png";
import youtube  from "../img/youtube.png";

import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
// import {Avatar} from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }
  render() {
    return (
      <div  id="footerBody">
        <Container  className="footer">
          
          
              
              <img src={Logo} alt="logo" className="footerlogo"></img>
                <ul className="social_links">
                  <li className="footli">
                    <a href="https://www.facebook.com/onelife6"> <Avatar alt="Remy Sharp" src={Facebook} /></a>
                  </li>
                  <li className="footli">
                    <a href="https://twitter.com/OneLife_global"><Avatar alt="Remy Sharp" src={Twitter}/></a>
                  </li>
                  <li className="footli">
                    <a href="https://www.instagram.com/OneLife_global/"><Avatar alt="Remy Sharp" src={Instagram}/></a>
                  </li>
                  <li className="footli">
                    <a href="https://wa.me/918368288846"><Avatar alt="Remy Sharp" src={whatsapp}/></a>
                  </li>
                  <li className="footli">
                    <a href="https://www.youtube.com/channel/UCJjWpB0s4GdpEbXChNCswqg"><Avatar className="youtube" alt="Remy Sharp" src={youtube}/></a>
                  </li>
                </ul>
              
            
            <Col>
            <Container>
              <Grid justify="space-between">
              <div className="footer_header d-flex justify-content-between">
                <div class="footer_header_left">
                  <h3>Do you have any problem ?</h3>
                  <p>Feel free to contact us anytime. </p>
                </div>
              </div>
              </Grid>
              </Container>
              <Row>
              <Col xs="4" sm="6" md="4" className="footercont">
                  <div >
                    <h3 className="footer_heading">
                      Navigation
                                            </h3>
                    <ul className="footlist">
                      <li> <Link to="/" className="lin">Home</Link></li>
                      <li> <Link to="/about_us" className="lin"> About Us</Link></li>
                      <li> <Link to="/services" className="lin">Services</Link></li>
                      <li> <Link to="/Events" className="lin">Events</Link></li>
                      <li><Link to="/team" className="lin">Team</Link></li>

                    </ul>
                  </div>
                </Col>
              <Col xs="4" sm="6" md="4" className="footercont">
                  <div >
                    <h3 className="footer_heading">
                      Terms & Conditions
                      </h3>
                    <ul className="footlist">
                      <li><a href="#">Terms Of Services</a></li>
                      <li><a href="#"> Privacy Policy</a></li>
                      <li><a href="#"> Return Policy</a></li>
                    </ul>
                  </div>
                </Col>
              <Col xs="4" sm="6" md="4" className="footercont">
                  <div >
                    <h3 className="footer_heading">
                      Contact Us
                                            </h3>
                    <ul className="footlist">
                      <li><a href="tel:836-828-8846">+91 8368288846</a></li>
                      <li><a href="tel:859-800-4995">+91 8598004995</a></li>
                      <li><a href="mailto: info@onelife.net.in"> info@onelife.net.in</a></li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
            
            
                
         <h5 className="bottom" align="center">&copy;  ONELIFE<br/><br/>Developed & Maintained by <a href="https://technoboot.in/">Technoboot Pvt. Ltd.</a></h5>
          <p align="center"><a href="https://www.freepik.com/free-photos-vectors/travel">Images & Vectors by www.freepik.com</a></p>
         
        </Container>
      </div>
    );
  }
}

export default Footer;
