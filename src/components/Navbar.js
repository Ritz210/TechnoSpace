import { stack as Menu } from 'react-burger-menu'
import React, { Component } from "react";
import Scrollchor from 'react-scrollchor';
import "../nav.css";
// import{NavItem}from "ReactBootstrap";

class NavbarMain extends React.Component {
  showSettings(event) {
    event.preventDefault();
   
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right>
        <a><Scrollchor to="page-wrap" animate={{ offset: 10, duration: 500 }} className="nav-link">Home</Scrollchor></a>
        <a><Scrollchor to="abouthome" animate={{ offset: 10, duration: 500 }} className="nav-link">About us</Scrollchor></a>
        <a><Scrollchor to="ourclients" animate={{ offset: 10, duration: 500 }} className="nav-link">Our Clients</Scrollchor></a>
        <a><Scrollchor to="footerBody" animate={{ offset: 10, duration: 500 }} className="nav-link">Contact us</Scrollchor></a>
      </Menu>
      // <Menu right>
      //   <a id="home" className="menu-item" href="/">Home</a>
      //   <a id="about" className="menu-item" href="/about">About</a>
      //   <a id="contact" className="menu-item" href="/contact">Contact</a>
      //   <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
      // </Menu>
    );
  }
}
export default NavbarMain;
