/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import Row from '../Row';
import { PersonList, PersonDetails } from '../sw-components';

const PeoplePage = ({ history, match }) => {
  const { id } = match.params;

  return (
    <div>
      <Row
        left={<PersonList onItemSelected={id => history.push(id)} />}
        right={<PersonDetails itemId={id} />}
      />
    </div>
  );
};
export default withRouter(PeoplePage);

PeoplePage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};
