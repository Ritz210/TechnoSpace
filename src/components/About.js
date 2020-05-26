import React, { Component } from "react";
import { Container, Row, Col, } from "reactstrap";
import { Button, Avatar, Grid, Typography } from "@material-ui/core";
import GlitchClip from 'react-glitch-effect/core/Clip';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import "../App.css";
import "../nav.css";
import MainCarousel from "./Carousel";
import { ParallaxProvider,ParallaxBanner,Parallax } from 'react-scroll-parallax';
import about1 from "../img/rocket.png";
import clients from "../img/clients.png";

import img1 from "../img/web3.jpg";
import img2 from "../img/web1.jpg";
import img3 from "../img/web2.jpg";
import imga1 from "../img/app2.jpg";
import imga2 from "../img/app3.jpg";
import imga3 from "../img/app1.jpg";
import imgg1 from "../img/grap3.jpg";
import imgg2 from "../img/grap2.jpg";
import imgg3 from "../img/grap1.jpg";
import imgd1 from "../img/d2.jpg";
import imgd2 from "../img/d1.jpg";
import imgd3 from "../img/d3.jpg";
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
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
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
                      
                    </Card>
                  </div>

                  <div>
                    <Card className="carddesign" style={{ width: '100%' }} ></Card>
                     
                  </div>
                </ReactCardFlip>
              </div>
            </Col>
            
            <Col xs="6" sm="12" md="6" className="aboutcontent" >
              <div id="titles"><div id="titlecontent">
              
                <h1>  Once upon a time not long back, </h1>
              <div className="separator"></div>
             

               
              <p className="aboutmaincontentma">  
                 
                   few backbenchers decided to step out of comfort zone,
                    to create an overall IT solution for all your related problems.
                     They vowed to make e- solution available and accessible to all.
                      They are here to give wings to dream you have dreamt,
                       give more fuel but at the same time taking out 
                       the fire(economical). May the force be with you.</p>
             
             
              </div></div>
              
             
            </Col>
             
          </Row>

        </Container>


       

        
        <div className="aboutdiv">
        <Container className="aboutcont">
          <Row className="aboutcard1">
            <Col xs="6" sm="6" md="6" className="aboutimg">
              <div class="homewrapper">
                <div class="home1wrap">
                    <GlitchClip duration="2.9s">                    
                  <img className="img1" src={imga1} alt="loosego"  ></img> 
                    </GlitchClip>
                </div>
                <div class="home2wrap">
                    <GlitchClip duration="2.5s"> 
                  <img className="img2" src={imga2} alt="loosego"  ></img> 
                  </GlitchClip>
                </div>
                <div class="home3wrap">
                    <GlitchClip duration="3.4s"> 
                  <img className="img3" src={imga3} alt="loosego"  ></img> 
                  </GlitchClip>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="6" md="6" className="aboutcontent">
              <div className="block">
                <span className="block__caption block__caption--right">
                    <Flip left cascade>
                     The service we provide.
                  </Flip>
                  </span>
                  <h2 className="block__title block__title--mars">
                    <Fade right big cascade>
                      App 
        </Fade>
                  </h2>
                {/* <h2 className="block__title block__title--mars">serie Mars</h2> */}
      


    

                <p className="block__content block__content--right">
                    Our team of experts has incorporated industry 
                    leading proficiency in technical ground. 
                    Already provided innumerable groundbreaking solutions 
                    to best in class UI mobile application for platforms
                    such as android and IOS with all short of advance
                     options making us unique and exclusive. 
								</p>
                <span className="block__caption block__caption--aligned">
                    So here we stand to lay our 
                      helping hand to make sure your dreams come true.     </span>
  
                
							</div>
            </Col>
          </Row>

        </Container>


        
          <Container className="aboutcont">
          <Row className="aboutcard1">
            <Col xs="6" sm="6" md="6" className="aboutcontent">
              <div className="blockm">
                  <span className="block__caption block__caption--right">
                    <Flip left cascade>
                      Something more we provide.
                  </Flip>
                  </span>
                  <h2 className="block__title block__title--mars">
                    <Fade left big cascade>
                      
                      Web 
        </Fade>
                  </h2>





                <p className="block__content block__content--right">
                    "If you don't know what you want to achieve 
                    in your presentation your audience never will.”
                    said  Harvey Diamond when asked about way to be successful.
                    And this is were we come in handy. 
                    Our technical skill will help you create platform that is subtle,
                    sharp, scintillating and of course smart so that your stature 
                    travels world wide on web.
								</p>
                <span className="block__caption block__caption--aligned">
                    'Sky is the limit ' , a philosophy that guides the millennials; 
we cock-a-hoop in providing wings to achieve the dream.</span>


              </div>
            </Col>
            <Col xs="6" sm="6" md="6" className="aboutimg">
              <div class="homewrapperm">
                  <div class="home1wrap">
                    <GlitchClip duration="2.9s">
                      <img className="img1" src={img1} alt="loosego"  ></img>
                    </GlitchClip>
                  </div>
                  <div class="home2wrap">
                    <GlitchClip duration="2.5s">
                      <img className="img2" src={img2} alt="loosego"  ></img>
                    </GlitchClip>
                  </div>
                  <div class="home3wrap">
                    <GlitchClip duration="3.4s">
                      <img className="img3" src={img3} alt="loosego"  ></img>
                    </GlitchClip>
                  </div>
              </div>
            </Col>
          </Row>

        </Container>




          <Container className="aboutcont">
          <Row className="aboutcard1">
            <Col xs="6" sm="6" md="6" className="aboutimg">
              <div class="homewrapper">
                  <div class="home1wrap">
                    <GlitchClip duration="2.9s">
                      <img className="img1" src={imgg1} alt="loosego"  ></img>
                    </GlitchClip>
                  </div>
                  <div class="home2wrap">
                    <GlitchClip duration="2.5s">
                      <img className="img2" src={imgg2} alt="loosego"  ></img>
                    </GlitchClip>
                  </div>
                  <div class="home3wrap">
                    <GlitchClip duration="3.4s">
                      <img className="img3" src={imgg3} alt="loosego"  ></img>
                    </GlitchClip>
                  </div>
              </div>
            </Col>
            <Col xs="6" sm="6" md="6" className="aboutcontent">
              <div className="block">
                  <span className="block__caption block__caption--right">
                    <Flip left cascade>
                      We are to designing field.
                  </Flip>
                  </span>
                  <h2 className="block__title block__title--mars">
                    <Fade right big cascade>
                      Graphic
                      <span>
                      Designing 
                      </span>
        </Fade>
                  </h2>




                <p className="block__content block__content--right">
                    They say 'first impression is last impression'.
                    And we help you establish an everlasting impression on the customers.
                    With our skilled hands in design team we'll provide 
                    an iconic branding prospective to put you ahead of your competitors.
								</p>
                <span className="block__caption block__caption--aligned">
                    'Sky is the limit ' , a philosophy that guides the millennials; 
we cock-a-hoop in providing wings to achieve the dream. </span>


              </div>
            </Col>
          </Row>

        </Container>
             
          <Container className="aboutcont">
            <Row className="aboutcard1">
              <Col xs="6" sm="6" md="6" className="aboutcontent">
                <div className="blockm">
                  <span className="block__caption block__caption--right">
                    <Flip left cascade>
                     The most availed service. 
                  </Flip>
                  </span>
                  <h2 className="block__title block__title--mars">
                    <Fade left big cascade>
                      Digital 
                      <span>
                      Marketing
                      </span>
        </Fade>
                  </h2>

                  <p className="block__content block__content--right">
                    We recognise the value of brand's perceptibility on social sites.
                     Social media is new hot spot and undeniably the best place 
                     to mark your presence. It creates goodwill and opportunities
                      to collaborate with industry leaders.
								</p>
                  <span className="block__caption block__caption--aligned">
                    Our sincerity is to turn conventional and incommodious way 
                    of business into lucid and loving platform to transact. </span>


                </div>
              </Col>
              <Col xs="6" sm="6" md="6" className="aboutimg">
                <div class="homewrapperm">
                  <div class="home1wrap">
                    <GlitchClip duration="2.9s">
                      <img className="img1" src={imgd1} alt="loosego"  ></img>
                    </GlitchClip>
                  </div>
                  <div class="home2wrap">
                    <GlitchClip duration="2.5s">
                      <img className="img2" src={imgd2} alt="loosego"  ></img>
                    </GlitchClip>
                  </div>
                  <div class="home3wrap">
                    <GlitchClip duration="3.4s">
                      <img className="img3" src={imgd3} alt="loosego"  ></img>
                    </GlitchClip>
                  </div>
                </div>
              </Col>
            </Row>

          </Container>



        </div>


        <div className="colpara" id="ourclients">

          <div className="clientshead">
            <Zoom left cascade>
            <span >our clients</span>
            </Zoom>
            <br/>
            <hr style={{
              display: 'inline-block',
              width: '200px',
              height: '0px',
              marginbottom: '10px',
              background: 'linear-gradient(45deg,#ddd6f3, #faaca8)',
            }}></hr>
          </div>

          <img className="clientss" src={clients} alt="loosego" ></img>
          {/* <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            // customTransition="all .5"
            // transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          responsive={responsive}>
            <div> <img className="imggg2" src={imggg1} alt="loosego"  ></img></div>
            <div> <img className="imggg2" src={imggg2} alt="loosego"  ></img></div>
            <div> <img className="imggg2" src={imggg3} alt="loosego"  ></img></div>
            <div> <img className="imggg2" src={imggg4} alt="loosego"  ></img></div>
            <div> <img className="imggg2" src={imggg1} alt="loosego"  ></img></div>
            <div> <img className="imggg2" src={imggg3} alt="loosego"  ></img></div>
            <div> <img className="imggg2" src={imggg2} alt="loosego"  ></img></div>
            <div> <img className="imggg2" src={imggg4} alt="loosego"  ></img></div>
          </Carousel>
          */}
        {/* <MainCarousel /> */}

        </div>
        
        

       
                    
      </div>
    );
  }
}
export default About;
