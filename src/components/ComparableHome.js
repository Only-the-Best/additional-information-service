import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';




const ComparableHome = (props) => {
  const GET_HOMES = gql`
  query getTen($num: [Int]!){
    getSome(num: $num) {
      address
      beds
      baths
      sqFt
      zestimate
      status
    }
  }
  `;
  const randArr = [];
  while (randArr.length < 10) {
    let rand = Math.floor(Math.random() * 100);
    if (!randArr.includes(rand)) {
      randArr.push(rand)
    }
  }

  return (<Query query={GET_HOMES} variables={{num: randArr}}>
    {
      ({ loading, error, data }) => {
      if (loading) {
        return "Loading...";
      }
      if (error) {
        return `Error! ${error.message}`;
      }
      data = data.getSome;
      const random = (num) => Math.floor(Math.random() * num);

      return data.map((house, idx) => {
          let zestimate = house.zestimate.splice(-1, 1);
          return (
            <div id="zestimate-DIV_1" key={idx}>
              <a href="/homedetails/7813-140th-Pl-NE-Redmond-WA-98052/49077656_zpid/" id="zestimate-A_2"><img src="https://dev.virtualearth.net/REST/v1/Imagery/Map/Aerial/47.674079,-122.152192/17?mapSize=101,76&amp;key=AmdvKO2hNoyLePakiVzRBZiGPKCxV6MtwWneohoPfmXclTaRTzvT6_Ict5-PBHO6" id="zestimate-IMG_3" alt='' /></a>
              <div id="zestimate-DIV_4">
                <h5 id="zestimate-H5_5">
                  <div id="zestimate-DIV_6">
                    <span id="zestimate-SPAN_7"></span> {house.status === 'For Sale' ? 'FOR SALE' :
                    `SOLD ${random(12)}/${random(29)}/${2017 + random(2)}`}
                  </div>
                </h5>
                <div id="zestimate-DIV_8">
                  ${zestimate}
                </div>
                <div id="zestimate-DIV_9">
                  <div id="zestimate-DIV_10">
                    {house.beds} beds • {house.baths} ba • {house.sqFt} sqft
                  </div>
                </div><a href="/homedetails/7813-140th-Pl-NE-Redmond-WA-98052/49077656_zpid/" id="zestimate-A_11">{house.address}</a>
              </div>
              <h3 id="zestimate-H3_12">
                ${Math.floor(zestimate/house.sqFt)}
              </h3>
            </div>
          )
        })
;
      }}
  </Query>);
};

export default ComparableHome;