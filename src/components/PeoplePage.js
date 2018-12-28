/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ItemList from './ItemList';
import PersonDetails from './PersonDetails';
import ErrorIndicator from './ErrorIndicator';
import SwapiService from '../services/swapi-service';
import ErrorBoundry from './ErrorBoundry';

const Row = ({ left, right }) => (
  <div className="row mb2">
    <div className="col-md-6">{left}</div>
    <div className="col-md-6">{right}</div>
  </div>
);

class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 5
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }
    const { selectedPerson } = this.state;

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {i => `${i.name} (${i.birthYear})`}
      </ItemList>
    );

    const personDetails = <PersonDetails personId={selectedPerson} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
export default PeoplePage;
