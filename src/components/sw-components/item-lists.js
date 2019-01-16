/* eslint-disable prettier/prettier,react/prop-types */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React from 'react';

import ItemList from '../ItemList';
import { withData, withSwapiService, compose, withChildFunction } from '../hoc-helpers/index';

const renderName = ({ name }) => <span>{name}</span>;
const renderModelEndName = ({ model, name }) => (
  <span>
    {name}
	{' '}
	(
	
{model}
	)
</span>);

const mapPersonMethodsToProps = swapiService => ({
  getData: swapiService.getAllPeople
});
const mapPlanetMethodsToProps = swapiService => ({
  getData: swapiService.getAllPlanets
});
const mapStarshipMethodsToProps = swapiService => ({
  getData: swapiService.getAllStarships
});

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName))(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderModelEndName))(ItemList);
	
const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderModelEndName))(ItemList);

export { PersonList, PlanetList, StarshipList };
