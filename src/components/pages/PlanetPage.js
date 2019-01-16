import React, { Component } from 'react';
import Row from '../Row';
import { PlanetList, PlanetDetails } from '../sw-components';

export default class PlanetPage extends Component {
  state = {
    selectedItem: 8
  };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <div>
        <Row
          left={<PlanetList onItemSelected={this.onItemSelected} />}
          right={<PlanetDetails itemId={selectedItem} />}
        />
      </div>
    );
  }
}
