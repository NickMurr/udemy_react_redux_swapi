import React, { Component } from 'react';

import Header from './Header';
import RandomPlanet from './RandomPlanet';

import '../scss/main.scss';
import PeoplePage from './PeoplePage';

import SwapiService from '../services/swapi-service';

class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  }
}

export default App;
