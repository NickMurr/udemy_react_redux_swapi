/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import SwapiService from '../services/swapi-service';

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then(peopleList => {
      this.setState({
        peopleList
      });
    });
  }

  renderItems(arr) {
    const { onItemSelected } = this.props;

    return arr.map(({ id, name }) => (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {name}
      </li>
    ));
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }
    const items = this.renderItems(peopleList);
    return <ul className="item-list list-group">{items}</ul>;
  }
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired
};
