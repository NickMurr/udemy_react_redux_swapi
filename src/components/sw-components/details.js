/* eslint-disable react/prop-types */
import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { SwapiServiceConsumer } from '../swapi-service-context/index';

const PersonDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {({ getPerson, getPersonImage }) => (
      <ItemDetails
        itemId={itemId}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >
        <Record label="Gender:" field="gender" />
        <Record label="Eye Color:" field="eyeColor" />
        <Record label="Birth Year:" field="birthYear" />
      </ItemDetails>
    )}
  </SwapiServiceConsumer>
);
const PlanetDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {({ getPlanet, getPlanetImage }) => (
      <ItemDetails
        itemId={itemId}
        getData={getPlanet}
        getImageUrl={getPlanetImage}
      >
        <Record label="Name:" field="name" />
        <Record label="population:" field="population" />
        <Record label="diameter:" field="diameter" />
      </ItemDetails>
    )}
  </SwapiServiceConsumer>
);
const StarshipDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {({ getStarShip, getStarShipImage }) => (
      <ItemDetails
        itemId={itemId}
        getData={getStarShip}
        getImageUrl={getStarShipImage}
      >
        <Record label="Model:" field="model" />
        <Record label="Length:" field="length" />
        <Record label="Cost:" field="costInCredits" />
      </ItemDetails>
    )}
  </SwapiServiceConsumer>
);

export { PersonDetails, PlanetDetails, StarshipDetails };
