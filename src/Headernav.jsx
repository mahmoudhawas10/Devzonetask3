import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Topbutton from "./Topbutton";
import { IoCartOutline } from "react-icons/io5";
class Headernav extends Component{
    render(){
        return(
          <>
            <Navbar expand="lg" className="bg-danger">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto d-flex justify-content-center align-items-center">
                  <Nav.Link href="#" className="fs-3"><IoCartOutline />
                  <span className="fs-5">0</span>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Topbutton 
          Reset={this.props.Reset}
          Deleteall={this.props.Deleteall}
          message={this.props.message}
          toggleMode={this.props.toggleMode}
          />
          </>
        );
        
    }
}
export default Headernav;