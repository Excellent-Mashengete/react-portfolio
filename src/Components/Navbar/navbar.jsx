import React, { useState } from 'react'
import { Container, Nav, Navbar} from "react-bootstrap";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import './navbar.css';

function Header() {
  const [navColour, updateNavbar] = useState(false);
  
  function scrollHandler() {
    if (window.scrollY >= 600) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
      <Navbar collapseOnSelect expand="lg" sticky='top' className={navColour ? "sticky" : "navbar"} > 
        <Container  >
          <Navbar.Brand href="#">E.N.M</Navbar.Brand>
          <Navbar.Toggle className="text-white" aria-controls="responsive-navbar-nav" >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"></Nav.Link>
              <Nav.Link href="#pricing"></Nav.Link>
            </Nav>
                  
            <Nav className="navLink">
              <Nav.Item>
                <Nav.Link smooth="true" exact="true" className='nav-link-ltr' href='#home' >
                  <AiOutlineHome style={{marginTop: "4px", marginRight:"5px"}} />HOME
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link exact="true" smooth="true" className='nav-link-ltr'  href="#about"><AiOutlineUser style={{marginTop: "4px", marginRight:"5px"}}/>ABOUT</Nav.Link>
              </Nav.Item>
                      
              <Nav.Item>
                <Nav.Link exact="true" smooth="true" className='nav-link-ltr'  href="#portfolio"><AiOutlineFundProjectionScreen style={{marginTop: "4px", marginRight:"5px"}} /> PROJECTS</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link exact="true" smooth="true" href="#contact"><MdOutlineMail style={{marginTop: "4px", marginRight:"5px"}} />CONTACT</Nav.Link> 
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;