import React, { Component } from 'react';

import Header from './Header';
import RandomPlanet from './RandomPlanet';
import ItemList from './ItemList';
import PersonDetails from './PersonDetails';
import '../scss/main.scss';

class App extends Component {
  state = {
    selectedPerson: 1
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    const { selectedPerson } = this.state;
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
