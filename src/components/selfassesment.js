import React, { Component } from "react";
import { Container} from "reactstrap";
import Footer from './Footer'; 
import ChatBot from '../components/chatbot';


  export default class Self extends Component {
    render() {
      return (
        <div>
  <div>
    <main className="self-page" >
      <section className="wrapped-page">
        <Container className="item-center">
          <h1 style={{float:"right"}} className="homemain1content">Under Development</h1>
          {/* <h3 className="homemaincontent">We Care || We Listen</h3>  */}
           {/* <Button outline color="primary" href="#mainCarousel">
            Explore More
          </Button> */}
        </Container>
       
      </section>
    </main>
  </div>
  
        <Footer/>
  </div>
) }
    }