/* eslint-disable react/prop-types */
import React from 'react';
import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record label="Gender:" field="gender" />
      <Record label="Eye Color:" field="eyeColor" />
      <Record label="Birth Year:" field="birthYear" />
    </ItemDetails>
  );
};

export default withSwapiService(PersonDetails);
