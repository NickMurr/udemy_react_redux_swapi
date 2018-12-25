import React from 'react';

import Header from './Header';
import RandomPlanet from './RandomPlanet';
import ItemList from './ItemList';
import PersonDetails from './PersonDetails';
import '../scss/main.scss';

const App = () => {
  const arr1 = [1, 5, 8, 10];
  const arr2 = [2, 4, 7];

  const output = [...arr1, ...arr2]
    .sort((a, b) => a - b)
    .reverse()
    .reduce((prev, curr) => prev + curr);
  console.log(output);

  return (
    <div className="container">
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
