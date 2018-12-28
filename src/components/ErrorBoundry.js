/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorIndicator from './ErrorIndicator';

class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <ErrorIndicator />;
    }
    return children;
  }
}
export default ErrorBoundry;

ErrorBoundry.propTypes = {
  children: PropTypes.object.isRequired
};
