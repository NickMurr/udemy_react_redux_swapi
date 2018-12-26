import React from 'react';
import icon from './img/Death_Star_icon.png';

const ErrorIndicator = () => (
  <div className="error-indicator">
    <img src={icon} alt="Error" />
    <span className="boom">BOOM</span>
    <span>something has gone terribly wrong</span>
    <span>(but we already send droids to fix it)</span>
  </div>
);

export default ErrorIndicator;
