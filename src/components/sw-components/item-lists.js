/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React from 'react';

import ItemList from '../ItemList';
import { withData, withSwapiService } from '../hoc-helpers/index';

const withChildFunction = (Wrapped, fn) => props => (
  <Wrapped {...props}>{fn}</Wrapped>
);

const renderName = ({ name }) => <span>{name}</span>;
const renderModelEndName = ({ model, name }) => (
  <span>
    {name}
{' '}
(
{model}
)
</span>
);

const ListWithChildrenClassic = withChildFunction(ItemList, renderName);
const ListWithChildrenShips = withChildFunction(ItemList, renderModelEndName);

const mapPersonMethodsToProps = swapiService => ({
  getData: swapiService.getAllPeople
});
const mapPlanetMethodsToProps = swapiService => ({
  getData: swapiService.getAllPlanets
});
const mapStarshipMethodsToProps = swapiService => ({
  getData: swapiService.getAllStarships
});

const PersonList = withSwapiService(
  withData(ListWithChildrenClassic),
  mapPersonMethodsToProps
);
const PlanetList = withSwapiService(
  withData(ListWithChildrenClassic),
  mapPlanetMethodsToProps
);
const StarshipList = withSwapiService(
  withData(ListWithChildrenShips),
  mapStarshipMethodsToProps
);

export { PersonList, PlanetList, StarshipList };
