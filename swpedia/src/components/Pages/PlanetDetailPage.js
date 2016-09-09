import React, { Component } from 'react';
import { Col, Grid, Image, PageHeader, Row } from 'react-bootstrap';

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

    const imageUrl = 'http://worldgen.bin.sh/worldgen.cgi?palette=Atlas&iter=5000&cmd=Create&name=PlanetName&pct_ice=0&height=250&seed=1169012608&rotate=0&projection=Spherical&pct_water=45&motif=SciFi';
    const rotatedImageUrl = 'http://worldgen.bin.sh/worldgen.cgi?palette=Atlas&iter=5000&cmd=Create&name=PlanetName&pct_ice=0&height=250&seed=1169012608&rotate=0180&projection=Spherical&pct_water=45&motif=SciFi';

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
            <Row>
              <Col xs={6}>
                <Image thumbnail src={imageUrl}/>
              </Col>
              <Col xs={6}>
                <Image thumbnail src={rotatedImageUrl}/>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <h2>Films</h2>
                <FilmsTable films={films}/>
              </Col>
            </Row>
          </Col>
        </Grid>
      </div>
    );
  }
}
