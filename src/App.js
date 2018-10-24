import React from 'react';
import Value from './components/Value.js';
import Price from './components/Price.js';
import Mortgage from './components/Mortgage.js';
import Home from './components/Home.js';
import Neighborhood from './components/Neighborhood.js';
import Schools from './components/Schools.js';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Value />
        <Price />
        <Mortgage />
        <Home />
        <Neighborhood />
        <Schools />
      </div>
    );
  }
}
