import React, { Component } from 'react';
import Header from './Header';
import RandomPlanet from './RandomPlanet';
import SwapiService from '../services/swapi-service';
import ErrorBoundry from './ErrorBoundry';

import '../scss/main.scss';

import { SwapiServiceProvider } from './swapi-service-context/index';

import { PeoplePage, PlanetPage, StarshipPage } from './pages';

class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="container">
            <Header />
            <RandomPlanet />

            <PeoplePage />
            <PlanetPage />
            <StarshipPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
