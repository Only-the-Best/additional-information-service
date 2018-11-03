import React from 'react';
import faker from 'faker';

const SimilarHomeTemplate = ({ houses, start, stop }) => {
  const random = num => Math.ceil(Math.random() * num);
  const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return houses.slice(start, stop).map((house, idx) => {
    const zestimate = house.zestimate.slice(-1)[0];
    let zestimateStr = start === 10
      ? zestimate * 0.97 + zestimate * Math.pow(10, -2) * Math.random() * 20
      : zestimate;
    const sellIncrease = Math.floor((zestimateStr / zestimate) * 100);
    zestimateStr = numberWithCommas(Math.floor(zestimate));
    return (
      <div className="similar-zestimate-container" key={idx}>
        <a>
          <img
            src={faker.image.avatar()}
            className="zestimate-similar-image"
            alt=""
          />
        </a>
        <div className="zestimate-similar-info-container">
          <h5 className="zestimate-similar-status-header">
            <div className="zestimate-similar-status-div">
              <span className="zestimate-similar-status-icon" />
              {' '}
              {house.status === 'For Sale'
                ? 'FOR SALE'
                : `SOLD ${random(12)}/${random(29)}/${2017 + random(2)}`}
            </div>
          </h5>
          <div className="zestimate-similar-zestimate">
$
            {zestimateStr}
          </div>
          <div className="zestimate-similar-stats-container">
            <div className="zestimate-similar-stats-info">
              {house.beds}
              {' '}
beds •
              {house.baths}
              {' '}
ba •
              {house.sqFt}
              {' '}
sqft
            </div>
          </div>
          <a href="" className="zestimate-similar-address-link">
            {house.address}
          </a>
        </div>
        <h3
          className={`zestimate-similar-proportional-stat ${
            start === 20 ? 'tax-assessment' : ''
          }`}
        >
          {start === 10
            ? `${sellIncrease}%`
            : start === 20
              ? `$${numberWithCommas(Math.floor(house.taxAssessment * 0.64))}`
              : `$${Math.floor(zestimate / house.sqFt)}`}
        </h3>
      </div>
    );
  });
};

export default SimilarHomeTemplate;
