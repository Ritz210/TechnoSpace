import React, { Component } from "react";
import {  Row, Col, } from "reactstrap";
import "../App.css";
import Avatar from '@material-ui/core/Avatar';
import Logo from "../img/logowhite.png"
import  Facebook  from "../img/facebook.png";
import  Twitter  from "../img/twitter.png";
import  whatsapp  from "../img/wp.png";
import Instagram  from "../img/instagram.png";
import linkindin  from "../img/link.png";
import { Dropdown } from 'react-bootstrap';



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
        <div  className="footer">
          
          
              
              <img src={Logo} alt="logo" className="footerlogo"></img>
          <ul className="social_links">
            <li className="footli">
              <a href="https://www.facebook.com/TechnobootOfficial/"> <Avatar alt="Remy Sharp" src={Facebook} /></a>
            </li>
            <li className="footli">
              <a href="https://twitter.com/TechnobootL"><Avatar alt="Remy Sharp" src={Twitter} /></a>
            </li>
            <li className="footli">
              <a href="https://www.instagram.com/official_technoboot/"><Avatar alt="Remy Sharp" src={Instagram} /></a>
            </li>
            <li className="footli">
              <a href="https://wa.me/917001290055"><Avatar alt="Remy Sharp" src={whatsapp} /></a>
            </li>
            <li className="footli">
              <a href="https://www.linkedin.com/company/technoboot-pvt-ltd/"><Avatar  alt="Remy Sharp" src={linkindin} /></a>
            </li>
          </ul>

          {/* <hr style={{
            display: 'inline-block',
            width: '200px',
            height: '0px',
            marginbottom: '10px',
            background: 'linear-gradient(45deg,#ddd6f3, #faaca8)',
          }}></hr> */}
                
            <Col>
            {/* <Container>
              <Grid justify="space-between">
              <div className="footer_head d-flex justify-content-between">
                <div class="footer_header_left">
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
                </div>
              </div>
              </Grid>
              </Container> */}
            <hr style={{
              display: 'inline-block',
              width: '200px',
              height: '0px',
              marginbottom: '10px',
              background: 'linear-gradient(45deg,#ddd6f3, #faaca8)',
            }}></hr>
              <Row>
              <Col xs="4" sm="4" md="4" >
                  <div >
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                      <p className="block__content block__content--right">Privacy Policy</p> 
  </Dropdown.Toggle>
  </Dropdown>
                    {/* <h3 className="footer_heading">
                    Privacy Policy
                                            </h3> */}
                    {/* <ul className="footlist">
                      <li> <Link to="/" className="lin">Home</Link></li>
                      <li> <Link to="/about_us" className="lin"> About Us</Link></li>
                      <li> <Link to="/services" className="lin">Services</Link></li>
                      <li> <Link to="/Events" className="lin">Events</Link></li>
                      <li><Link to="/team" className="lin">Team</Link></li>

                    </ul> */}
                  </div>
                </Col>
              <Col xs="4" sm="4" md="4" >
                  <div >
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                      <p className="block__content block__content--right">  Terms & Conditions</p>
  </Dropdown.Toggle>
  </Dropdown>
                    {/* <h3 className="footer_heading">
                      Terms & Conditions
                      </h3> */}
                    {/* <ul className="footlist">
                      <li><a href="#">Terms Of Services</a></li>
                      <li><a href="#"> Privacy Policy</a></li>
                      <li><a href="#"> Return Policy</a></li>
                    </ul> */}
                  </div>
                </Col>
              <Col xs="4" sm="4" md="4" >
                  <div >

                  <Dropdown>
                    <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                      <p className="block__content block__content--right">  Contact </p>
  </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="tel:787-016-0478">+91 7870160478</Dropdown.Item>
                      <Dropdown.Item href="tel:859-800-4995">+91 7001290055</Dropdown.Item>
                      <Dropdown.Item href="mailto: info@onelife.net.in"> info@technoboot.in</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                    
                    {/* <h3 className="footer_heading">
                      Terms of service
                                            </h3> */}
                    {/* <ul className="footlist">
                      <li><a href="tel:836-828-8846">+91 8368288846</a></li>
                      <li><a href="tel:859-800-4995">+91 8598004995</a></li>
                      <li><a href="mailto: info@onelife.net.in"> info@onelife.net.in</a></li>
                    </ul> */}
                  </div>
                </Col>
              </Row>
            </Col>
          
         


              
            <div class="flexdiv">
         
          <h5 className="bottom" align="center">&copy;2020  TECHNOBOOT</h5>
          </div>
{/*                 
         <h5 className="bottom" align="center">&copy;  TECHNOBOOT<br/>
         <br/>Developed & Maintained by <a href="https://technoboot.in/">
           Technoboot Pvt. Ltd.</a></h5> */}
          
         
        </div>
      </div>
    );
  }
}

export default Footer;
