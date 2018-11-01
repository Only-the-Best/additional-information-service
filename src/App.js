import React from 'react';
import Expenses from './components/Expenses.js';
import Price from './components/Price.js';
import Mortgage from './components/Mortgage.js';
import Home from './components/Home.js';
import Neighborhood from './components/Neighborhood.js';
import Schools from './components/Schools.js';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';



export const HouseIdContext = React.createContext({
  houseArr: [],
  currentHouse: {},
});


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
      houseList: [this.props.rand],
      currentHouse: this.props.current.getSome[0],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(target) {
    this.setState({[target]: !this.state[target]});
  }
  render() {
    return (
          <HouseIdContext.Provider value={this.state}>
            <div>
              <Home status={this.state.home} expand={this.handleClick} current={this.state.currentHouse}/>
              <Price status={this.state.price} expand={this.handleClick} />
              <Mortgage status={this.state.mortgage} expand={this.handleClick} />
              <Expenses status={this.state.expenses} expand={this.handleClick} />
              <Neighborhood status={this.state.neighborhood} expand={this.handleClick} />
              <Schools status={this.state.schools} expand={this.handleClick} />
            </div>
          </HouseIdContext.Provider>);

  }
}

export const PreQuery = () => {
  let rand = [Math.floor(Math.random() * 100)];
  let houseId = Number(window.location.pathname.replace(/\//, ''));
  if (houseId >= 0 && houseId < 100) {
    rand = [houseId];
  }

  return (
  <Query query={gql`
      query Current($num: [Int]!){
        getSome(num: $num) {
          address
          city
          zestimate
          beds
          baths
          sqFt
          status
        }
      }
      `} variables={{ num: rand }}
  >
    {({ loading, error, data }) => {
      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>Error :(</p>;
      }
      return <App current={data} num={rand} />;
    }}
  </Query>
)};
