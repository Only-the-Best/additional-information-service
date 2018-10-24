import React from 'react';
import Expenses from './components/Expenses.js';
import Price from './components/Price.js';
import Mortgage from './components/Mortgage.js';
import Home from './components/Home.js';
import Neighborhood from './components/Neighborhood.js';
import Schools from './components/Schools.js';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: false,
      price: false,
      mortgage: false,
      expenses: false,
      neighborhood: false,
      schools: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(target) {
    this.setState({[target]: !this.state[target]});
  }
  render() {
    return (
      <div>
        <Home status={this.state.home} expand={this.handleClick} />
        <Price status={this.state.price} expand={this.handleClick} />
        <Mortgage status={this.state.mortgage} expand={this.handleClick} />
        <Expenses status={this.state.expenses} expand={this.handleClick} />
        <Neighborhood status={this.state.neighborhood} expand={this.handleClick} />
        <Schools status={this.state.schools} expand={this.handleClick} />
      </div>
    );
  }
}
