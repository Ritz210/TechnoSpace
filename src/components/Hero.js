import React from "react";
import { Button, Container } from "reactstrap";
import "../App.css";
import logo from "../img/techlogo.png";

const Hero = () => (
  <div>
    <main className="cover-page" id="hero">
      
      <section className="wrapped-page">
        
        <Container className="item-center">
          <div>
           
            <img className="logo" src={logo} />
            
          </div>
         
          <div className="homemain1content">RITWICK KUMAR</div>
          <h3 className="homemaincontent">B-Tech(Computer Science & Engineering)</h3> 
      
          {/* <Button outline color="primary" href="#mainCarousel">
            Explore More
        </Button>{" "}*/}
        </Container>
        
      </section>
     
    </main>
    
  </div>
);
export default Hero;