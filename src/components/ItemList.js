/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

class ItemList extends Component {
  state = {
    itemList: null
  };

  componentDidMount() {
    const { getData } = this.props;

    getData().then(itemList => {
      this.setState({
        itemList
      });
    });
  }

  renderItems(arr) {
    const { onItemSelected, children } = this.props;

    return arr.map(item => {
      const { id } = item;
      const label = children(item);
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
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }
    const items = this.renderItems(itemList);
    return <ul className="item-list list-group">{items}</ul>;
  }
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired
};

export default ItemList;

ItemList.propTypes = {
  getData: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
};
