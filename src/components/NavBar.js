import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faUsers, faEnvelope, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="navbar" light expand="md">
        <NavbarBrand href="/" className="nav-logo">LOGO</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href=""><FontAwesomeIcon icon={faEnvelope} /></NavLink>
            </NavItem>

            <NavItem>
              <NavLink href=""><FontAwesomeIcon icon={faUsers} /></NavLink>
            </NavItem>

            <NavItem>
              <NavLink>| <FontAwesomeIcon icon={faUserCircle  } /> User Name <FontAwesomeIcon icon={faCaretDown} /></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;