import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import HomeChart from './HomeChart.js';
import { HouseIdContext} from "../App";
import moment from 'moment';


const ZestimateChart = ({selected}) => (
  <HouseIdContext.Consumer>
    {({houseList, currentHouse}) => {
      while (houseList.length < 3) {
        let rand = Math.floor(Math.random() * 100);
        if (!houseList.includes(rand)) {
          houseList.unshift(rand);
        }
      }
      return (
        <Query
          query={gql`
    query Homes($num: [Int]!){
      getSome(num: $num){
        zestimate
      }
    }
    `} variables={{ num: houseList }}
        >

          {({ loading, error, data }) => {
            if (loading) {
              return <p>Loading...</p>;
            }
            if (error) {
              return <p>Error :(</p>;
            }

            data = data.getSome;
            let current = currentHouse.zestimate;
            while (current.length < 132) {
              current.unshift(null);
            }
            let dashed = data[1].zestimate;
            while (dashed.length < 132) {
              dashed.unshift(null);
            }
            let rand = data[0].zestimate;
            while (rand.length < 132) {
              rand.unshift(null);
            }

            let tickets = moment().subtract(1, 'months').format('MM/YY');


            let count = 1;
            const monthsArr = Array.from({length: 132}, () => {
               return moment().subtract(count++, 'months').format('MM/YY');
            }).reverse();

            let formatted = rand.map((zest, idx) => {
              return { name: monthsArr[Math.floor(idx)], 'This House': current[idx], Wakanda: zest, Narnia: dashed[idx] };
            });

            if (selected === 5) {
              formatted = formatted.slice(-60);
            } else if (selected === 1) {
              formatted = formatted.slice(-12);
            }

            return <HomeChart data={formatted} />;
          }}
        </Query>);
    }}
  </HouseIdContext.Consumer>
);

export default ZestimateChart;
