/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import SwapiService from '../services/swapi-service';

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
    loading: false
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    const { itemId } = this.props;

    if (itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }
    this.setState({
      loading: true
    });
    getData(itemId).then(item => {
      this.setState({
        item,
        image: getImageUrl(item),
        loading: false
      });
    });
  }

  render() {
    const { item, image } = this.state;
    if (!item) {
      return <Spinner />;
    }
    const { loading } = this.state;
    const hasdata = !loading;
    const spinner = loading ? <Spinner /> : null;
    const content = hasdata ? <PersonView item={item} image={image} /> : null;

    return (
      <div className="person-details card">
        {spinner}
        {content}
      </div>
    );
  }
}

const PersonView = ({ item, image }) => {
  // const { image } = this.state;

  const { name, gender, birthYear, eyeColor } = item;

  return (
    <React.Fragment>
      <img className="person-image" src={image} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

ItemDetails.propTypes = {
  // personId: PropTypes.string.isRequired
  getData: PropTypes.func.isRequired,
  getImageUrl: PropTypes.func.isRequired,
  itemId: PropTypes.number.isRequired
};

PersonView.propTypes = {
  item: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired
};
