import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context/index';

const withSwapiService = Wrapped => props => (
  <SwapiServiceConsumer>
    {swapiService => <Wrapped {...props} swapiService={swapiService} />}
  </SwapiServiceConsumer>
);

export default withSwapiService;
