/* eslint-disable react/no-children-prop */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const Record = ({ item, field, label }) => (
  <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{item[field]}</span>
  </li>
);

export { Record };

export default class ItemDetails extends Component {
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
    const { children } = this.props;

    if (!item) {
      return <Spinner />;
    }
    const { loading } = this.state;
    const hasdata = !loading;
    const spinner = loading ? <Spinner /> : null;
    const content = hasdata ? (
      <PersonView item={item} image={image} children={children} />
    ) : null;

    return (
      <div className="person-details card">
        {spinner}
        {content}
      </div>
    );
  }
}

const PersonView = ({ item, image, children }) => {
  const { name } = item;
  return (
    <React.Fragment>
      <img className="person-image" src={image} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(children, child =>
            React.cloneElement(child, { item })
          )}
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
  image: PropTypes.string.isRequired
};

Record.propTypes = {
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
