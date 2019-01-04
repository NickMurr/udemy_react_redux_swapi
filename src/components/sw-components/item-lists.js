/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React from 'react';

import ItemList from '../ItemList';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const { getAllStarships, getAllPeople, getAllPlanets } = swapiService;

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

const PersonList = withData(ListWithChildrenClassic, getAllPeople);
const PlanetList = withData(ListWithChildrenClassic, getAllPlanets);
const StarshipList = withData(ListWithChildrenShips, getAllStarships);

export { PersonList, PlanetList, StarshipList };
