/* eslint-disable react/prop-types */
import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = props => (
  <ItemDetails {...props}>
    <Record label="Model:" field="model" />
    <Record label="Length:" field="length" />
    <Record label="Cost:" field="costInCredits" />
  </ItemDetails>
);

const mapMethodsToProps = swapiService => ({
  getData: swapiService.getStarShip,
  getImageUrl: swapiService.getStarShipImage
});

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
