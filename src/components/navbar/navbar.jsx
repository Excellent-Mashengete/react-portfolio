import React, { useState } from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { MdOutlineMail } from "react-icons/md";
import './navbar.css';

function Header() {
    const [expand ] = useState(false);
    const [navColour] = useState(false);  

  return (
    // <Navbar collapseOnSelect  expanded={expand}
    // fixed="top"
    // expand="md"
    // className={navColour ? "sticky" : "navbar"} bg="dark" variant="dark" >
        <Navbar collapseOnSelect expand="md">
        <Container >
            <Navbar.Brand href="#home">E.N.M</Navbar.Brand>
            <Navbar.Toggle className="text-white" aria-controls="responsive-navbar-nav" >
                <span></span>
                <span></span>
                <span></span>
            </Navbar.Toggle>

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link  href="#features"></Nav.Link>
                    <Nav.Link href="#pricing"></Nav.Link>
                </Nav>
                <Nav className="navLink">
                    <Nav.Item>
                        <Nav.Link exact as={Link} to="/"><AiOutlineHome style={{marginTop: "4px", marginRight:"5px"}} />HOME</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link exact href="#about"><AiOutlineUser style={{marginTop: "4px", marginRight:"5px"}}/>ABOUT</Nav.Link>
                    </Nav.Item>
 
                    <Nav.Item>
                        <Nav.Link exact href="#resume"><CgFileDocument style={{marginTop: "4px", marginRight:"5px"}} />RESUME</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Nav.Link exact href="#projects"><AiOutlineFundProjectionScreen style={{marginTop: "4px", marginRight:"5px"}} /> PROJECTS</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link exact href="#contact"><MdOutlineMail style={{marginTop: "4px", marginRight:"5px"}} />CONTACT</Nav.Link> 
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Header;