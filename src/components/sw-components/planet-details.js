/* eslint-disable react/prop-types */
import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { SwapiServiceConsumer } from '../swapi-service-context/index';

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

export default PlanetDetails;
