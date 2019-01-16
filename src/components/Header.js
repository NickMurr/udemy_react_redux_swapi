/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header d-flex">
    <h3>
      <Link to="/">Star DB</Link>
    </h3>
    <ul className="d-flex">
      <li>
        <Link to="/people/1">People</Link>
      </li>
      <li>
        <Link to="/planets/">Planets</Link>
      </li>
      <li>
        <Link to="/starships/">Starships</Link>
      </li>
    </ul>
  </div>
);

export default Header;
