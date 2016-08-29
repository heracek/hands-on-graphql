import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Grid, Row, Col, Nav, Navbar, Clearfix, PageHeader, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">SWpedia</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Nav>
            </Nav>
          </Grid>
        </Navbar>
        <Clearfix />
        <Grid>
          <Row>
            <Col xs={12}>
              <PageHeader>Welcome to SWpedia</PageHeader>
              <p>
                <Button
                  href="http://react-bootstrap.github.io/components.html"
                  target="_blank"
                  bsStyle="primary"
                >
                  View React Bootstrap Docs
                </Button>
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
