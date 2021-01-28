import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const NavbarComponent = () => {
  const [state] = useContext(CartContext);

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Dumbways.id</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link to="/home" as={Link}>
          Home
        </Nav.Link>
        <Nav.Link to="/cart" as={Link} className="font-weight-bold text-white">
          Cart | {state.carts.length}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
