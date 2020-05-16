import React, { Component } from "react";
import { Container} from "reactstrap";
import Footer from './Footer'; 
import ChatBot from '../components/chatbot';
import banner from "../img/banner.jpg";


  export default class Contacts extends Component {
    render() {
      return (
        <div>
            <div>
                <main className="contactcover-page" id="about">
                    <section className="wrapped-page">
                    </section>
                </main>
            </div>
          <div className="banner">
            <img className="bannerimg" src={banner} alt="logo" style={{ height: '100%', width: '100%', }}></img>
          </div>
            <Container>
          <div class="row">
            <div class="col-12">
              <h2 class="contact-title">Get in Touch</h2>
            </div>
            <div class="col-lg-8">
              <form class="form-contact contact_form" method="POST" id="contactForm" novalidate="novalidate">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder="Enter your Message"></textarea>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input class="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name"/>
                                    </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input class="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email"/>
                                    </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input class="form-control valid" name="phone" id="phone" type="number" maxlength="10" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Phone Number'" placeholder="Phone Number"/>
                                    </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input class="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject"/>
                                    </div>
                          </div>
                        </div>
                        <div class="form-group mt-3">
                          <button type="submit" class="button button-contactForm boxed-btn">Send</button>
                        </div>
                        </form>
                    </div>
                    <div class="col-lg-3 offset-lg-1">
                      <div class="media contact-info">
                        <span class="contact-info__icon"><i class="ti-home"></i></span>
                        <div class="media-body">
                          <h3>Patia, Bhubaneswar</h3>
                          <p className="para">India</p>
                        </div>
                      </div>
                      <div class="media contact-info">
                        <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                        <div class="media-body">
                          <a href="tel:836-828-8846"><h3>+91 8368288846</h3></a>
                          <a href="tel:859-800-4995"><h3>+91 8598004995</h3></a>
                          <p className="para">Call us at your own convenience!</p>
                        </div>
                      </div>
                      <div class="media contact-info">
                        <span class="contact-info__icon"><i class="ti-email"></i></span>
                        <div class="media-body">
                        <a href="mailto: info@onelife.net.in"><h3>info@onelife.net.in</h3></a>
                          <p className="para">Send us your query anytime!</p>
                        </div>
                      </div>
                    </div>
                  </div>
            </Container>
            <ChatBot/>
            <Footer/>
        </div>
      );
    }
  }