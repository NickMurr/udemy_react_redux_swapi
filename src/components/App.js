import React, { Component } from 'react';
import Header from './Header';
import RandomPlanet from './RandomPlanet';
// import PeoplePage from './PeoplePage';
import SwapiService from '../services/swapi-service';
import ItemDetails from './ItemDetails';
import Row from './Row';

import '../scss/main.scss';

class App extends Component {
  swapiService = new SwapiService();

  render() {
    const {
      getPerson,
      getStarShip,
      getPersonImage,
      getStarShipImage
    } = this.swapiService;
    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      />
    );
    const starShipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarShip}
        getImageUrl={getStarShipImage}
      />
    );
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        {/* <PeoplePage /> */}

        <Row left={personDetails} right={starShipDetails} />
      </div>
    );
  }
}

export default App;
