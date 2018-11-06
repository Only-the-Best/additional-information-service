import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import App from '../App';

export const PreQuery = () => {
  let rand = [Math.floor(Math.random() * 100)];
  const houseId = Number(window.location.pathname.replace(/\//, ''));
  if (houseId && houseId >= 0 && houseId < 100) {
    rand = [houseId];
  }
  return (
    <Query
      query={gql`
        query Current($num: [Int]!) {
          getSome(num: $num) {
            address
            city
            zestimate
            beds
            baths
            sqFt
            status
            taxAssessment
          }
        }
      `}
      variables={{ num: rand }}
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
  );
};
