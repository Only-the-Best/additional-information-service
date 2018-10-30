import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import HomeChart from './HomeChart.js';


const ZestimateChart = () => (
  <Query
    query={gql`
    {
      allHouses{
        zestimate
      }
    }
    `}
  >

    {({ loading, error, data }) => {
      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>Error :(</p>;
      }
      data = data.allHouses;
      //chart too jagged, need better dummy data
      //could seed another database/collection
      const random = Math.floor(Math.random() * data.length);
      const average = data[0].zestimate.slice(-data[random].length - 1);
      const formatted = data[random].zestimate.map((zest, idx) => {
        return { name: 'Page A', uv: zest, pv: average[idx] };
      });
      return <HomeChart data={formatted} />;
    }}
  </Query>
);

export default ZestimateChart;
