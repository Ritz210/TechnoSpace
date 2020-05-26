import React, { Component } from "react";

import "../App.css";
import "../nav.css";
import Hero from "./Hero";
import About from "./About";



import Footer from "./Footer";
import Particles from 'react-particles-js';

class Home extends Component {
  render() {
    return (
      <div>
      
           
        <main id="page-wrap">
           
            <Hero  />
          <About />
          {/* <Package /> */}
          {/* <Services /> */}
          {/* <Contact /> */}
          <Footer />
          <Particles
            params={{
              "particles": {
                "number": {
                  "value": 120,
                  "density": {
                    "enable": true,
                    "value_area": 515.67400345663043,
                  }
                },
                "color": { "value": "#ffffff" },
                "opacity": {
                  "value": 1, "random": true,
                },
                "size": {
                  "value": 2,
                  "random": true,
                  "anim": {
                    "speed": 4,
                    "size_min": 0.3
                  }
                },
                "line_linked": {
                  "enable": false
                },
                "move": {
                  "random": true,
                  "speed": 2,
                  "direction": "bottom-right",
                  "out_mode": "out"
                }
              },
              "interactivity": {
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "repulse"
                  }
                },
                "modes": {
                  "bubble": {
                    "distance": 150,
                    "duration": 4,
                    "size": 5,
                    "opacity": 0.529090719716695,
                  },
                  "repulse": {
                    "distance": 170,
                    "duration": 3
                  }
                }
              }
            }} className="particle" />
  </main>
      
      </div>
    
      
       
    );
  }
}

export default Home;
