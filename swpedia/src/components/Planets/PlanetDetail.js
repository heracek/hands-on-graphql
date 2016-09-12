import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

import { Col, Grid, Image, PageHeader, Row } from 'react-bootstrap';

import { FilmsTable } from '../Films/FilmsTable.js';
import { InfoList } from '../InfoList/InfoList.js';

export class PlanetDetail extends Component {
  render() {
    const { planet } = this.props;
    const safePlanet = planet || {};
    const { rawId, name, films } = safePlanet;

    const infoItems = [
      { key: 'population', header: 'Population'},
      { key: 'diameter', header: 'Diameter', suffix: ' km'},
      { key: 'climate', header: 'Climate'},
      { key: 'surfaceWater', header: 'Surface Water', suffix: '%'},
    ];

    const imageUrl = 'http://worldgen.bin.sh/worldgen.cgi?palette=Atlas&iter=5000&cmd=Create&name=PlanetName&pct_ice=0&height=250&seed=1169012608&rotate=0&projection=Spherical&pct_water=45&motif=SciFi';
    const rotatedImageUrl = 'http://worldgen.bin.sh/worldgen.cgi?palette=Atlas&iter=5000&cmd=Create&name=PlanetName&pct_ice=0&height=250&seed=1169012608&rotate=0180&projection=Spherical&pct_water=45&motif=SciFi';

    return (
      <div>
        <PageHeader>{name} <small>ID: {rawId}</small></PageHeader>
        <Grid>
          <Col xs={6}>
            <h2>Planet Info</h2>
            <InfoList
              data={safePlanet}
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

export const PlanetDetailContainer = Relay.createContainer(PlanetDetail, {
  fragments: {
    planet: () => Relay.QL`
      fragment on Planet {
        rawId

        name

        population
        diameter
        climate
        surfaceWater

        films {
          id
          title
        }
      }
    `
  },
});

