import React, { Component } from "react";
import { Container, Row, Col, } from "reactstrap";
import { Button, Avatar, Grid, Typography } from "@material-ui/core";
import "../App.css";
import "../nav.css";
import MainCarousel from "./Carousel";
import Award from "../assets/svg/shield.svg";
import { ReactComponent as Shield } from "../assets/svg/shield.svg";
import { ReactComponent as Compass } from "../assets/svg/compass.svg";
import { ReactComponent as Heart } from "../assets/svg/heart.svg";
// import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Call from '../assets/svg/call.jpg';
import Chat from '../assets/svg/chat.jpg';
import C from '../assets/svg/c.jpg';
import about1 from "../img/gifrocket.gif";
// import ChatBot from '../components/chatbot';
import Homeproblem from "../assets/svg/homeproblem-01.jpg";
import Choose from "../assets/svg/whychooseus.jpg";
import ReactCardFlip from 'react-card-flip';
import { Card} from 'react-bootstrap';
import Expertise from "../assets/svg/homeexperties.jpg";
import Solution from "../assets/svg/homesolution.jpg";
import { Redirect } from 'react-router-dom';

// import { Grid } from "@material-ui/core";
const card = {
  borderRadius: "20px",

  backgroundColor: "#f8f0ff",
  marginTop: 50,
  marginLeft: 40,
  marginRight: 40,
};
class About extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick1 = this.handleClick1.bind(this);
    // this.openchatbot = this.openchatbot.bind(this);
  }
  handleClick1(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  
  render() {
    return (
      <div >
         
        <Container id="abouthome" >
          <Row className="aboutcard">
            <Col xs="6" sm="12" md="6" className="aboutimg" className="float">
              <div >
                <ReactCardFlip flipDirection="Default card">
                  <div>
                    <Card className="carddesign" className="gifrock" style={{ width: '100%' }} >
                      <Card.Img variant="top" src={about1} />
                      {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                    </Card>
                  </div>

                  <div>
                    <Card className="carddesign" style={{ width: '100%' }} >
                      {/* <Card.Img variant="top"  />  */}
                      {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                    </Card>
                    {/* <img src={about11} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}

                  </div>
                </ReactCardFlip>
              </div>
            </Col>
            
            <Col xs="6" sm="12" md="6" className="aboutcontent" >
              <div id="titles"><div id="titlecontent">
              {/* <p className="aboutfirstcontent"> ABOUT US </p> */}
              <h1> We have solution to your problem </h1>
              <div className="separator"></div>
             

               
              <p className="aboutmaincontentma">  
               Remember, that it is okay to ask for professional help. 
              If you feel that you are struggling to manage
               on your own, then you can reach out. 
              It is important to know that you can get 
              help as soon as possible, and that you deserve
               to get better
              .We @ One Life try to empower you
               to make your own decisions.We provide reflective feedback, 
              supportive dialogue and thoughtful inquiry 
              to make the situations clear.Our Team utilizes techniques, 
              modalities, and theories that have been rigorously
               studied and researched.
              Our counseling focuses only on you and works to
               understand and guide you to achieve your goals.</p>
              {/* <p className="aboutmaincontentxs">
                Remember, that it is okay to ask for professional help. If you feel that you are struggling to manage on your own, then you can reach out. We @ One Life try to empower you to make your own decisions.We provide  thoughtful inquiry to make the situations clear.
                 We focuses only on you and works to understand and guide you to achieve your goals.
               </p> */}
             
              </div></div>
              
              {/* <Button href="/services" className="box-btn" variant="outlined" size="large">
                VIEW MORE
              </Button> */}
            </Col>
             
          </Row>

        </Container>


        <div class="parallax">
          <div class="parallax__layer parallax__layer--back">
            <div>
              <Card className="carddesign" style={{ width: '100%' }} >
                <Card.Img variant="top" src={Choose} />
                {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
              </Card>
            </div>
  </div>
          <div class="parallax__layer parallax__layer--base">
            <div>
            <h1>  Why Choose Us </h1>
            <div className="separator"></div>
            <p className="aboutmaincontent">   Team of One Life keeps your conversation private and confidential always.
            You can always have discussions with us without revealing your name untill you are comfortable.Our mission is to always bring the positive impact in every person's
               life who reach out to us for sharing their issues and finding solutions for them as well.</p>
            {/* <Button href="/about_us" className="box-btn" variant="outlined" size="large">
                VIEW MORE
              </Button> */}
              </div>
  </div>
        </div>


       

        
        
        <Container>
          <Row className="aboutcard1">
            <Col xs="6" sm="12" md="6" className="aboutimg">
              <div >
                <ReactCardFlip flipDirection="Default card">
                  <div>
                    <Card className="carddesign" style={{ width: '100%' }} >
                      <Card.Img variant="top" src={Choose} />
                      {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                    </Card>
                  </div>

                  <div>
                    <Card className="carddesign" style={{ width: '100%' }} >
                      {/* <Card.Img variant="top"  />  */}
                      {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                    </Card>
                    {/* <img src={about11} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}

                  </div>
                </ReactCardFlip>
              </div>
            </Col>
            <Col xs="6" sm="12" md="6" className="aboutcontent">
              {/* <p className="aboutfirstcontent"> ABOUT US </p> */}
              <h1>  Why Choose Us </h1>
              <div className="separator"></div>
              <p className="aboutmaincontent">   Team of One Life keeps your conversation private and confidential always.
              You can always have discussions with us without revealing your name untill you are comfortable.Our mission is to always bring the positive impact in every person's
               life who reach out to us for sharing their issues and finding solutions for them as well.</p>
             {/* <Button href="/about_us" className="box-btn" variant="outlined" size="large">
                VIEW MORE
              </Button> */}
            </Col>
          </Row>

        </Container>


        <div className="colpara">
         
        <MainCarousel />

        </div>
        
        

        <Container>
          <Row className="aboutcard">
            <Col xs="6" sm="12" md="6" className="aboutimg">
              {/* <div > */}
                <ReactCardFlip  flipDirection="Default card">
                  <div>
                    <Card className="carddesign" style={{ width: '100%' }} >
                      <Card.Img variant="top" src={Expertise} />
                      {/* <img src={about1} alt="loosego" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                    </Card>
                  </div>

                  <div>
                    {/* <Card className="carddesign" style={{ width: '30rem' }} onMouseLeave={this.handleClick1}>
                      <Card.Img variant="top" src={Solution} /> */}
                    {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                    {/* </Card> */}
                    {/* <img src={about11} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}

                  </div>
                </ReactCardFlip>
              {/* </div> */}
            </Col>
            <Col xs="6" sm="12" md="6" className="aboutcontent">
              {/* <p className="aboutfirstcontent"> ABOUT US </p> */}
              <h1>   Expertise </h1>
              <div className="separator"></div>
              <p className="aboutmaincontent">
                We all have our own unique set of issues and go through different types of stress,so we at One Life have curated some specialised programs for every kind of problems you face generally in life that becomes a hinderance to your growth in life.
              </p>
              <ul className="homelist">
                <li>Career Counselling</li>
                <li>Marriage Counselling</li>
                <li>Relationship Coaching</li>
                <li>Workplace Stress Management</li>
                <li>Pre and Post Marriage Jitters</li>
              </ul>
              {/* <Button href="/coreteam" className="box-btn" variant="outlined" size="large">
                VIEW MORE
              </Button> */}
            </Col>
          </Row>

        </Container>
                     <Grid container justify="center"> 
                     
                    {/* <ChatBot/> */}
                      
                  
                      </Grid>
      </div>
    );
  }
}
export default About;
