/* eslint-disable react/no-multi-comp */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import SwapiService from '../services/swapi-service';
import { withData } from './hoc-helpers';

const ItemList = props => {
  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map(item => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired
};

ItemList.propTypes = {
  getData: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
};
