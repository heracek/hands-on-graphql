import React, { Component } from 'react';
import { Col, Grid, PageHeader } from 'react-bootstrap';

import { PlanetsTable } from '../Planets/PlanetsTable.js';

export class FilmDetailPage extends Component {
  render() {
    const { filmId: id } = this.props.params;
    const {
      title,
      openingCrawl,
      planets,
    } = {
      title: 'Some Film Title',
      openingCrawl: "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
      planets: [
        { id: 1, name: 'Tatooine' },
        { id: 3, name: 'Yavin IV' },
      ],
    };

    return (
      <div>
        <PageHeader>{title} <small>ID: {id}</small></PageHeader>
        <Grid>
          <Col xs={6}>
            <h2>Opening openingCrawl</h2>
            <pre>{openingCrawl}</pre>
          </Col>
          <Col xs={6}>
            <h2>Planets</h2>
            <PlanetsTable planets={planets}/>
          </Col>
        </Grid>
      </div>
    );
  }
}
