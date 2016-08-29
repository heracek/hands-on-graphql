import React, { Component } from 'react';
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap';
import { Grid, Nav, Navbar, NavItem } from 'react-bootstrap';

export class AppNavBar extends Component {
  render() {
    return (
      <Navbar inverse fixedTop>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">SWpedia</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav>
            <LinkContainer to="/about">
              <NavItem>About</NavItem>
            </LinkContainer>
          </Nav>
        </Grid>
      </Navbar>
    );
  }
}
