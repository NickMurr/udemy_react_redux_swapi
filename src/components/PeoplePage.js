/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';
import ErrorIndicator from './ErrorIndicator';
import SwapiService from '../services/swapi-service';
import ErrorBoundry from './ErrorBoundry';
import Row from './Row';

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

    const itemDetails = <ItemDetails itemId={selectedPerson} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    );
  }
}
export default PeoplePage;
