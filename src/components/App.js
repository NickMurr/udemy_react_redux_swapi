import React, { Component } from 'react';
import Header from './Header';
import RandomPlanet from './RandomPlanet';
import SwapiService from '../services/swapi-service';
import ErrorBoundry from './ErrorBoundry';

import '../scss/main.scss';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from './sw-components';

class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <div className="container">
          <Header />
          <RandomPlanet />

          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />

          <PersonList>{({ name }) => <span>{name}</span>}</PersonList>
          <StarshipList>{({ name }) => <span>{name}</span>}</StarshipList>
          <PlanetList>{({ name }) => <span>{name}</span>}</PlanetList>
        </div>
      </ErrorBoundry>
    );
  }
}

export default App;
