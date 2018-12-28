import React, { Component } from 'react';
import Header from './Header';
import RandomPlanet from './RandomPlanet';
import SwapiService from '../services/swapi-service';
import ItemDetails, { Record } from './ItemDetails';
import Row from './Row';
import '../scss/main.scss';
import PeoplePage from './PeoplePage';
import ItemList from './ItemList';
import ErrorBoundry from './ErrorBoundry';

class App extends Component {
  swapiService = new SwapiService();

  render() {
    const {
      getPerson,
      getStarShip,
      getPersonImage,
      getStarShipImage,
      getAllPeople,
      getAllPlanets
    } = this.swapiService;
    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record label="Gender:" field="gender" />
        <Record label="Eye Color:" field="eyeColor" />
        <Record label="Birth Year:" field="birthYear" />
      </ItemDetails>
    );
    const starShipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarShip}
        getImageUrl={getStarShipImage}
      >
        <Record label="Model:" field="model" />
        <Record label="Length:" field="length" />
        <Record label="Cost:" field="costInCredits" />
      </ItemDetails>
    );
    return (
      <ErrorBoundry>
        <div className="container">
          <Header />
          <RandomPlanet />

          {/* <Row left={personDetails} right={starShipDetails} /> */}

          <ItemList getData={getAllPeople} onItemSelected={() => {}}>
            {({ name }) => <span>{name}</span>}
          </ItemList>
          <ItemList getData={getAllPlanets} onItemSelected={() => {}}>
            {({ name }) => <span>{name}</span>}
          </ItemList>
        </div>
      </ErrorBoundry>
    );
  }
}

export default App;
