
import React from "react";

import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="">
              My Hotel
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">
              Kraken Digital Solutions
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </footer>
  );
}

export default Footer;
