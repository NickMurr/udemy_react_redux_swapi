/* eslint-disable react/prop-types */
import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { SwapiServiceConsumer } from '../swapi-service-context/index';

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

export default StarshipDetails;
