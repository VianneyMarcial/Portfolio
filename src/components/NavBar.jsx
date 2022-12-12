import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import pdf from '../../resources/Vianney_Marcial_Cv.pdf';

const NavBar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <button className='cv'>
        <a href={pdf} target="_blank" rel="noopener noreferrer" download="Vianney_Marcial_Cv.pdf"> 
        Download CV 
        </a>
      </button>  
      <Navbar collapseOnSelect expand="sm">
        <Container>
          <Navbar.Brand eventKey="1" as={Link} to="/">
            <img src=".//hogar.gif" alt="" className='homeGif'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link eventKey="2" as={Link} to="/aboutMe" className={pathname.includes('aboutMe')?'selected':''}>
                  <h3>About Me</h3>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3" as={Link} to="/skills" className={pathname.includes('skills')?'selected':''}>
                  <h3>Skills</h3>
                </Nav.Link>{" "}                
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="4" as={Link} to="/portfolio" className={pathname.includes('portfolio')?'selected':''}>
                  <h3>Portfolio</h3>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="5" as={Link} to="/contactMe" className={pathname.includes('contactMe')?'selected':''}>
                  <h3>Contact Me</h3>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;