import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import { StarshipList } from '../sw-components';

const StarshipPage = ({ history }) => (
  <StarshipList onItemSelected={id => history.push(id)} />
);

export default withRouter(StarshipPage);

StarshipPage.propTypes = {
  history: PropTypes.number.isRequired
};
