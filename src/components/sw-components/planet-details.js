/* eslint-disable react/prop-types */
import React from 'react';
import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = props => (
  <ItemDetails {...props}>
    <Record label="Name:" field="name" />
    <Record label="population:" field="population" />
    <Record label="diameter:" field="diameter" />
  </ItemDetails>
);

const mapMethodsToProps = swapiService => ({
  getData: swapiService.getPlanet,
  getImageUrl: swapiService.getPlanetImage
});

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
