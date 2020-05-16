import React, { Component } from "react";
import "../App.css";
import Hero from "./Hero";
// import About from "./About";
import "../App.css";
// import Package from "./Package";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import about1 from "../img/one.png";
import about11 from "../img/about1.2.png";
import about2 from "../img/about2.1.png";
import about21 from "../img/about2.2.png";
import about3 from "../img/vision.jpg";
import about31 from "../img/about3.2.png";
import about4 from "../img/values.jpg";
import about41 from "../img/about4.2.png";
import { Container, Row, Col } from "reactstrap";
import {Card,Button } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import ChatBot from '../components/chatbot';
import banner from "../img/banner1.png";
class About_us extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick1 = this.handleClick1.bind(this);
        // this.handleClick2 = this.handleClick2.bind(this);
        // this.handleClick3 = this.handleClick3.bind(this);
        // this.handleClick4 = this.handleClick4.bind(this);

    }
    handleClick1(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    // handleClick2(e) {
    //     e.preventDefault();
    //     this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    // }
    // handleClick3(e) {
    //     e.preventDefault();
    //     this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    // }
    // handleClick4(e) {
    //     e.preventDefault();
    //     this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    // }
    render() {
        return (
            <div>
                <div>
                <main className="aboutcover-page" id="about">
                    <section className="wrapped-page">
                            <Container className="item-center">
                                {/* <h1 className="homemain1content">we understand we empathize</h1>
                                <h3 className="homemaincontent">We Care || We Listen</h3> */}
                            {/* <Button outline color="primary" href="#mainCarousel">
                                Explore More
          </Button>{" "}
                        </div> */} 
                        </Container>
                    </section>
                </main>
            </div>
            
                {/* <Hero /> */}
                
                <Container>
                        <Row className="aboutcard1">
                        <Col xs="6" sm="12" md="6" className="aboutimg">
                            <div >
                                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="Default card">  
                                            <div>
                                        <Card className="carddesign" style={{ width: '100%' }} onClick={this.handleClick1} onMouseEnter={this.handleClick1}>
                                            <Card.Img variant="top" src={about1} />
                                                {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                                            </Card>
                                            </div>

                                            <div>
                                        <Card className="carddesign" style={{ width: '100%' }} onClick={this.handleClick1} onMouseLeave={this.handleClick1}>
                                            <Card.Img variant="top" src={about11} />
                                            {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                                        </Card>
                                                {/* <img src={about11} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}

                                            </div>
                                </ReactCardFlip>
                            </div>
                            </Col>
                        <Col xs="6" sm="12" md="6" className="aboutcontent">
                            {/* <p className="aboutfirstcontent"> ABOUT US </p> */}
                            <h1> One Life </h1>
                            <div className="separator"></div>
                          <p className="aboutmaincontentma">  One life is an initiative to help people from overcoming stress,
                             depression, anxiety and suicidal ideations,
                             work related stress due to multiple reasons. We @One Life focus on overall growth and 
                             balance of human emotions and it's improvement At One Life we provide online counselling, 
                             various emotional support platforms, provide seminar and workshops at school, college and corporates,
                              on overcoming different stress related issues in student and work life. Our team comprises of 
                              experienced psychologists, psychotherapists, counselors, life coach, career guide who are with
                               rich and deep life experiences. They will understand you and guide you through completely
                                confidential individual sessions. </p>
                            <p className="aboutmaincontentxs">
                                One life is an initiative to help people from overcoming stress, depression,
                                 anxiety and suicidal ideations, work related stress due to multiple reasons.
                                  We understand you and guide you through completely confidential individual sessions,
                                   we focus on overall growth and balance of human emotions and it's improvement 
                                   At One Life we provide online counselling, various emotional support platforms,
                                    provide seminar and workshops at school, college and corporates, 
                                on overcoming different stress related issues in student and work life.
               </p>
                            </Col>
                        </Row>
                    <Row className="aboutcard">
                        <Col xs="6" sm="12" md="6" className="aboutcontent">
                            {/* <p className="aboutfirstcontent">  ABOUT US </p> */}
                          <h1>  Our Mission </h1>
                            <div className="separator"></div>
                            <p className="aboutmaincontent">   Our mission is to make people emotionally balanced 
                            in their life through our counselling sessions and training programs.</p>
                        </Col>
                        <Col xs="6" sm="12" md="6" className="aboutimg">
                            <div >
                                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="Default card">
                                    <div>
                                        <Card className="carddesign" style={{ width: '100%' }} onClick={this.handleClick1} onMouseEnter={this.handleClick1}>
                                            <Card.Img variant="top" src={about2} />
                                            {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                                        </Card>
                                    </div>

                                    <div>
                                        <Card className="carddesign" style={{ width: '100%' }} onClick={this.handleClick1} onMouseLeave={this.handleClick1}>
                                            <Card.Img variant="top" src={about21} />
                                            {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                                        </Card>
                                        {/* <img src={about11} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}

                                    </div>
                                </ReactCardFlip>
                            </div>
                        </Col>
                    </Row>
                    <Row className="aboutcard">
                        <Col xs="6" sm="12" md="6" className="aboutimg">
                            <div >
                                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="Default card">
                                    <div>
                                        <Card className="carddesign" style={{ width: '100%' }} onClick={this.handleClick1} onMouseEnter={this.handleClick1}>
                                            <Card.Img variant="top" src={about3} />
                                            {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                                        </Card>
                                    </div>

                                    <div>
                                        <Card className="carddesign" style={{ width: '100%' }} onClick={this.handleClick1} onMouseLeave={this.handleClick1}>
                                            <Card.Img variant="top" src={about31} />
                                            {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                                        </Card>
                                        {/* <img src={about11} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}

                                    </div>
                                </ReactCardFlip>
                            </div>
                        </Col>
                        <Col xs="6" sm="12" md="6" className="aboutcontent">
                            {/* <p className="aboutfirstcontent">   ABOUT US  </p> */}
                         <h1>   Our Vision </h1>
                            <div className="separator"></div>
                            <p className="aboutmaincontent">   Our vision is to create awareness amongst people
                             to live a happy and healthy life,mentally,emotionally and physically. </p>
                        </Col>
                    </Row>
                    <Row className="aboutcard">
                        <Col xs="6" sm="12" md="6" className="aboutcontent">
                         {/* <p className="aboutfirstcontent">   ABOUT US  </p> */}
                         <h1>   Our Value  </h1>
                         <div className="separator"></div>
                            <p className="aboutmaincontent">   Our Values are our intent to initiate for a greater cause to help
                             people to lead a Balanced lifestyle personally and professionally. </p>
                        </Col>
                        <Col xs="6" sm="12" md="6" className="aboutimg">
                            <div >
                                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="Default card">
                                    <div>
                                        <Card className="carddesign" style={{ width: '100%' }} onClick={this.handleClick1} onMouseEnter={this.handleClick1}>
                                            <Card.Img variant="top" src={about4} />
                                            {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                                        </Card>
                                    </div>

                                    <div>
                                        <Card className="carddesign" style={{ width: '100%' }} onClick={this.handleClick1} onMouseLeave={this.handleClick1}>
                                            <Card.Img variant="top" src={about41} />
                                            {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                                        </Card>
                                        {/* <img src={about11} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}

                                    </div>
                                </ReactCardFlip>
                            </div>
                        </Col>
                    </Row>
                    </Container>
                    <ChatBot/>
                <Footer />
            </div>
        );
    }
}

export default About_us;
