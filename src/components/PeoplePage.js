/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ItemList from './ItemList';
import PersonDetails from './PersonDetails';
import ErrorIndicator from './ErrorIndicator';

class PeoplePage extends Component {
  state = {
    selectedPerson: 5,
    hasError: false
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }
    const { selectedPerson } = this.state;

    return (
      <React.Fragment>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={selectedPerson} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default PeoplePage;
