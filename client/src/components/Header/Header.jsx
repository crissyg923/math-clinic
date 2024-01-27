import { Navbar, Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './index.css';

function Header () {

  // return (
//   <header>
// <h1 className="siteheader text-center p-2">Welcome to Ms. Colbert's Math Clinic</h1>
//     </header>


  return (
  <header>

    <Navbar className="header"  expand="lg">
  <Navbar.Brand className="headerlogo" href="#home">Ms. Colbert's Math Clinic </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <LinkContainer className="home"to="/">
      <Nav.Link href="/">Home</Nav.Link>
      </LinkContainer>
      {/* <LinkContainer to="/fractions">
      <Nav.Link href="/aboutme">About Me</Nav.Link>
      </LinkContainer> */}
      {/* <LinkContainer to="/portfolio">
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/resume">
      <Nav.Link href="/resume">Resume</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/contact">
      <Nav.Link href="/contact">Contact Me</Nav.Link>
      </LinkContainer> */}
    </Nav>

  </Navbar.Collapse>
</Navbar>
    </header>
  );
}

 


export default Header;
