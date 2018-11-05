import React from 'react';
import Home from './components/Home.js';
import Mortgage from './components/Mortgage.js';

export const HouseIdContext = React.createContext({
  houseArr: [],
  currentHouse: {},
});

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      mortgage: true,
      houseList: [this.props.rand],
      currentHouse: this.props.current.getSome[0],
      comparableHomes: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(target) {
    this.setState({ [target]: !this.state[target] });
  }

  componentDidMount() {
    const randArr = [];
    while (randArr.length < 30) {
      const rand = Math.floor(Math.random() * 100);
      if (!this.state.houseList.includes(rand) && !randArr.includes(rand)) {
        randArr.push(rand);
      }
    }
    this.setState({ comparableHomes: randArr });
  }

  render() {
    return (
      <HouseIdContext.Provider value={this.state}>
        <div>
          <Home
            status={this.state.home}
            expand={this.handleClick}
            current={this.state.currentHouse}
          />
          <Mortgage
            status={this.state.mortgage}
            expand={this.handleClick}
            />
        </div>
      </HouseIdContext.Provider>
    );
  }
}

