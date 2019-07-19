import React from 'react';
import '../support/css/Navbar.css'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
   } from 'reactstrap';

class NavbarMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md" className='navbar' fixed >
          <NavbarBrand href="/">Sea View Lembongan</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="">Rooms</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Photos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Restaurant & Spa</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Amenities</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Reviews</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavbarMenu;
