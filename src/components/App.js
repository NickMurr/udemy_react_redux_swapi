import React, { Component } from 'react';

import Header from './Header';
import RandomPlanet from './RandomPlanet';

import '../scss/main.scss';
import PeoplePage from './PeoplePage';

class App extends Component {
  state = {
    // selectedPerson: 1
  };

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
