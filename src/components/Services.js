import React, { Component } from "react";
import "../App.css";
import Hero from "./Hero";
// import About from "./About";
import "../App.css";
// import Package from "./Package";
// import Services from "./Services";
// import Contact from "./Contact";
import Footer from "./Footer";
import about1 from "../img/about1.1.png";
import about11 from '../img/about1.2.jpg';
import about2 from '../img/work.jpg';
// import m from '../img/about2.2.jpg';
import m1 from '../img/mar.jpg';
import m from '../img/abo.jpg';
import about3 from "../img/about3.1.png";
import about31 from "../img/about3.2.png";  
import about4 from "../img/about4.1.png";
import about41 from "../img/about4.2.png";
import pre from '../img/divorse.jpg';
import post from '../img/post.jpg';
import work from '../img/85.png';
import su from '../img/su.jpg';
import su1 from '../img/su1.jpg';
import ChatBot from '../components/chatbot';
import banner from "../img/banner1.png";

import { Container, Row, Col } from "reactstrap";
import { Card, Button } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
class Services extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);

  }
  handleClick1(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  handleClick2(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  handleClick3(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  handleClick4(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    return (
      <div>
        <div>
          <main className="servicecover-page" id="about">
            <section className="wrapped-page">
              
            </section>
          </main>
        </div>

        {/* <Hero /> */}
        <div className="banner">
          <a class="mobilesOnly" href="tel:8368288846">
            <img className="bannerimg" src={banner} alt="logo" style={{ height: '100%', width: '100%', }}></img>
          </a>
        </div>
        <Container>
        <Row className="servicecard">
            <Col xs="6" sm="12" md="6" className="servicecontent">
              {/* <p className="aboutfirstcontent">   ABOUT US  </p> */}
              <h1> Mental Health </h1>
              <div className="separator"></div>
              <ul class="homelist">
                <li>Facing problems with your partner ?</li>
                <li>Do you face problem in communicating with your partner ?</li>
              </ul>
              <p></p>
              <p className="aboutmaincontent">Feel free to contact us for marriage related issues.</p>
            </Col>
            <Col xs="6" sm="12" md="6" className="serviceimg">
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
          </Row>
          <Row className="servicecard">
            <Col xs="6" sm="12" md="6" className="serviceimg">
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
            <Col xs="6" sm="12" md="6" className="servicecontent">
              {/* <p className="aboutfirstcontent"> ABOUT US </p> */}
              <h1> Depression </h1>
              <div className="separator"></div>
              <ul class="homelist">
                <li>Going through persistent sadness ?</li>
                <li>Change in sleep and appetite ?</li>
                <li>Experiencing agitation, excessive crying, irritability, restlessness, or social isolation ?</li>
              </ul>
              <p></p>
              <p className="aboutmaincontent">Feel free to contact us for anti-depression counselling.</p>
            </Col>
          </Row>
          <Row className="servicecard">
            <Col xs="6" sm="12" md="6" className="servicecontent">
              {/* <p className="aboutfirstcontent">  ABOUT US </p> */}
              <h1>  Workplace stress</h1>
              <div className="separator"></div>
              <ul class="homelist">
                <li>Do you face lack of confidence ?</li>
                <li>Do you constantly have fear of being laid off ?</li>
                <li>Experiencing agitation, excessive crying, irritability, restlessness, or social isolation ?</li>
              </ul>
              <p></p>
              <p className="aboutmaincontent">Feel free to contact us for boosting up your confidence at workplace.</p>
            </Col>
            <Col xs="6" sm="12" md="6" className="serviceimg">
              <div >
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="Default card">
                  <div>
                    <Card className="carddesign" style={{ width: '100%' }} onClick={this.handleClick1} onMouseEnter={this.handleClick1}>
                      <Card.Img variant="top" src={work} />
                      {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                    </Card>
                  </div>

                  <div>
                    <Card className="carddesign" style={{ width: '100%' }} onClick={this.handleClick1} onMouseLeave={this.handleClick1}>
                      <Card.Img variant="top" src={about2} />
                      {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                    </Card>
                    {/* <img src={about11} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}

                  </div>
                </ReactCardFlip>
              </div>
            </Col>
          </Row>
          <Row className="servicecard">
            <Col xs="6" sm="12" md="6" className="serviceimg">
              <div >
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="Default card">
                  <div>
                    <Card className="carddesign" style={{ width: '100%' }} onClick={this.handleClick1} onMouseEnter={this.handleClick1}>
                      <Card.Img variant="top" src={pre} />
                      {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                    </Card>
                  </div>

                  <div>
                    <Card className="carddesign" style={{ width: '100%' }} onClick={this.handleClick1} onMouseLeave={this.handleClick1}>
                      <Card.Img variant="top" src={post} />
                      {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                    </Card>
                    {/* <img src={about11} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}

                  </div>
                </ReactCardFlip>
              </div>
            </Col>
            <Col xs="6" sm="12" md="6" className="servicecontent">
              {/* <p className="aboutfirstcontent">   ABOUT US  </p> */}
              <h1> Marriage </h1>
              <div className="separator"></div>
              <ul class="homelist">
                <li>Facing problems with your partner ?</li>
                <li>Do you face problem in communicating with your partner ?</li>
              </ul>
              <p></p>
              <p className="aboutmaincontent">Feel free to contact us for marriage related issues.</p>
            </Col>
          </Row>
          <Row className="servicecard">
            <Col xs="6" sm="12" md="6" className="servicecontent">
              {/* <p className="aboutfirstcontent">   ABOUT US service */}
              <h1>Career stress</h1>
              <div className="separator"></div>
              <ul class="homelist">
                <li>Feeling confused which career option will best suit you ?</li>
                <li>Having anxiety issues before exams and interviews ?</li>
                <li>Being stressed to achieve your goals in your career constantly ?</li>
              </ul>
              <p></p>
              <p className="aboutmaincontent">Feel free to contact us for relieving your worries regarding all your career relates issues.</p>
              </Col>
            <Col xs="6" sm="12" md="6" className="serviceimg">
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
          <Row className="servicecard">
            <Col xs="6" sm="12" md="6" className="serviceimg">
              <div >
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="Default card">
                  <div>
                    <Card className="carddesign" style={{ width: '100%' }} onClick={this.handleClick1} onMouseEnter={this.handleClick1}>
                      <Card.Img variant="top" src={su} />
                      {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                    </Card>
                  </div>

                  <div>
                    <Card className="carddesign" style={{ width: '100%' }} onClick={this.handleClick1} onMouseLeave={this.handleClick1}>
                      <Card.Img variant="top" src={su1} />
                      {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                    </Card>
                    {/* <img src={about11} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}

                  </div>
                </ReactCardFlip>
              </div>
            </Col>
            <Col xs="6" sm="12" md="6" className="servicecontent">
              {/* <p className="aboutfirstcontent"> ABOUT US </p> */}
              <h1> Suicide Ideation </h1>
              <div className="separator"></div>
              <ul class="homelist">
                <li>Do you constantly think of ending your life ?</li>
                <li>Do you feel unworthy or helpless ?</li>
                <li>Are you in a state of sadness, guilt, shame, sleeplessness ?</li>
              </ul>
              <p></p>
              <p className="aboutmaincontent">Feel free to share with us your problems without being judged.</p>
            </Col>
          </Row>
          <Row className="servicecard">
            <Col xs="6" sm="12" md="6" className="servicecontent">
              {/* <p className="aboutfirstcontent">  ABOUT US </p> */}
              <h1>Pre & Post-Marriage Jitters</h1>
              <div className="separator"></div>
              <ul class="homelist">
                <li>Are you feeling worried about your new life ?</li>
                <li>Are you facing wedding related anxieties ?</li>
              </ul>
              <p></p>
              <p className="aboutmaincontent">Feel free to share with us to cope up with pre-wedding jitters.</p>
            </Col>
            <Col xs="6" sm="12" md="6" className="serviceimg">
              <div >
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="Default card">
                  <div>
                    <Card className="carddesign" style={{ width: '100%' }} onClick={this.handleClick1} onMouseEnter={this.handleClick1}>
                      <Card.Img variant="top" src={m} />
                      {/* <img src={about1} alt="logo" onClick={this.handleClick1} style={{ height: '550px', outerWidth: '350px' }}></img> */}
                    </Card>
                  </div>

                  <div>
                    <Card className="carddesign" style={{ width: '100%' }} onClick={this.handleClick1} onMouseLeave={this.handleClick1}>
                      <Card.Img variant="top" src={m1} />
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

export default Services;
