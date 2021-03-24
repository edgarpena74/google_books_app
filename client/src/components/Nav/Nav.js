import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Nav.css";

const Navigation = () => {
  return (
    <div>
      <Navbar id="navBar">
        <Navbar.Brand href="/home" className="navBrand">
          Google Books
        </Navbar.Brand>
        <Navbar className="justify-content-end navItems">
          <Nav.Item>
            <Nav.Link eventKey="link-1">Search</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Saved</Nav.Link>
          </Nav.Item>
        </Navbar>
      </Navbar>
    </div>
  );
};

export default Navigation;
