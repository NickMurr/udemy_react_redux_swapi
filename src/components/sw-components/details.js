import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarShip,
  getPersonImage,
  getPlanetImage,
  getStarShipImage
} = swapiService;

const PersonDetails = ({ itemId }) => (
  <ItemDetails itemId={itemId} getData={getPerson} getImageUrl={getPersonImage}>
    <Record label="Gender:" field="gender" />
    <Record label="Eye Color:" field="eyeColor" />
    <Record label="Birth Year:" field="birthYear" />
  </ItemDetails>
);
const PlanetDetails = ({ itemId }) => (
  <ItemDetails itemId={itemId} getData={getPlanet} getImageUrl={getPlanetImage}>
    <Record label="Name:" field="name" />
    <Record label="population:" field="population" />
    <Record label="diameter:" field="diameter" />
  </ItemDetails>
);
const StarshipDetails = ({ itemId }) => (
  <ItemDetails
    itemId={itemId}
    getData={getStarShip}
    getImageUrl={getStarShipImage}
  >
    <Record label="Model:" field="model" />
    <Record label="Length:" field="length" />
    <Record label="Cost:" field="costInCredits" />
  </ItemDetails>
);

export { PersonDetails, PlanetDetails, StarshipDetails };
