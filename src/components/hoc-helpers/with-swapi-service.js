import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context/index';

const withSwapiService = MapMethodsToProps => Wrapped => props => (
  <SwapiServiceConsumer>
    {swapiService => {
      const serviceProps = MapMethodsToProps(swapiService);
      return <Wrapped {...props} {...serviceProps} />;
    }}
  </SwapiServiceConsumer>
);

export default withSwapiService;
