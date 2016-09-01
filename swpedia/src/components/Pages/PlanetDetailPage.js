import React, { Component } from 'react';
import { Col, Grid, ListGroup, ListGroupItem, PageHeader } from 'react-bootstrap';

import { FilmsTable } from '../Films/FilmsTable.js';

export class PlanetDetailPage extends Component {
  render() {
    const { planetId: id } = this.props.params;
    const {
      name,
      population,
      climate,
      diameter,
      films,
    } = {
      name: 'Some Planet',
      population: 8000,
      climate: 'temperate, tropical',
      diameter: 10200,
      films: [
        { id: 1, title: 'A New Hope' },
        { id: 3, title: 'Return of the Jedi' },
      ],
    };

    return (
      <div>
        <PageHeader>{name} <small>ID: {id}</small></PageHeader>
        <Grid>
          <Col xs={6}>
            <h2>Info</h2>
            <ListGroup>
              <ListGroupItem header="Population">{population}</ListGroupItem>
              <ListGroupItem header="Climate">{climate}</ListGroupItem>
              <ListGroupItem header="Diameter">{diameter}</ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs={6}>
            <h2>Films</h2>
            <FilmsTable films={films}/>
          </Col>
        </Grid>
      </div>
    );
  }
}
