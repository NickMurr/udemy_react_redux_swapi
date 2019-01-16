import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import RandomPlanet from './RandomPlanet';
import SwapiService from '../services/swapi-service';
import ErrorBoundry from './ErrorBoundry';
import { PeoplePage, PlanetPage, StarshipPage } from './pages';
import { SwapiServiceProvider } from './swapi-service-context/index';
import '../scss/main.scss';
import { StarshipDetails } from './sw-components/details';

class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="container">
              <Header />
              <RandomPlanet />
              <Route exact path="/" render={() => <h2>Welcome to StarDB</h2>} />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets" component={PlanetPage} />
              <Route path="/starships" exact component={StarshipPage} />
              <Route
                path="/starships/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />;
                }}
              />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
