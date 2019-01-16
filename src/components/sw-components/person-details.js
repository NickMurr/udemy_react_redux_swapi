/* eslint-disable react/prop-types */
import React from 'react';
import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = props => (
  <ItemDetails {...props}>
    <Record label="Gender:" field="gender" />
    <Record label="Eye Color:" field="eyeColor" />
    <Record label="Birth Year:" field="birthYear" />
  </ItemDetails>
);

const mapMethodsToProps = swapiService => ({
  getData: swapiService.getPerson,
  getImageUrl: swapiService.getPersonImage
});

export default withSwapiService(mapMethodsToProps)(PersonDetails);
