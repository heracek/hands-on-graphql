import React, { Component } from 'react';
import { Col, Grid, PageHeader } from 'react-bootstrap';

import { FilmsTable } from '../Films/FilmsTable.js';
import { InfoList } from '../InfoList/InfoList.js';

export class PlanetDetailPage extends Component {
  render() {
    const { planetId: id } = this.props.params;
    const {
      ...planet,
      name,
      films,
    } = {
      name: 'Some Planet',
      population: 8000,
      climate: 'temperate, tropical',
      diameter: 10200,
      surface_water: 10,
      films: [
        { id: 1, title: 'A New Hope' },
        { id: 3, title: 'Return of the Jedi' },
      ],
    };

    const infoItems = [
      { key: 'population', header: 'Population'},
      { key: 'diameter', header: 'Diameter', suffix: ' km'},
      { key: 'climate', header: 'Climate'},
      { key: 'surface_water', header: 'Surface Water', suffix: '%'},
    ];

    return (
      <div>
        <PageHeader>{name} <small>ID: {id}</small></PageHeader>
        <Grid>
          <Col xs={6}>
            <h2>Planet Info</h2>
            <InfoList
              data={planet}
              items={infoItems}
            />
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
