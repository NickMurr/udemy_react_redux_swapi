import React from 'react';

const Spinner = () => (
  <div className="lds-css ng-scope">
    <div className="lds-double-ring">
      <div />
      <div />
    </div>
    <div>Loading</div>
  </div>
);

export default Spinner;
