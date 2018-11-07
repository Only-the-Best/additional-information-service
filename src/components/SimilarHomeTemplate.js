import React from 'react';
import faker from 'faker';

const SimilarHomeTemplate = ({ houses, start, stop }) => {
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
        <a href={`/${house._id}`}>
          <img
            src={
              !(start + idx >= 6 && start + idx <= 8)
                ? imageUrl[start + idx]
                : imageUrl[start + idx + 20]
            }
            className="zestimate-similar-image"
            alt=""
          />
        </a>
        <div className="zestimate-similar-info-container">
          <h5 className="zestimate-similar-status-header">
            <div className="zestimate-similar-status-div">
              <span className="zestimate-similar-status-icon">
                <img
                  className="status-icon"
                  src={
                    house.status === 'For Sale'
                      ? 'https://s3-us-west-1.amazonaws.com/housing-hr/red-for-sale.png'
                      : 'https://s3-us-west-1.amazonaws.com/housing-hr/yellow-sold.png'
                  }
                />
              </span>
              {' '}
              {house.status === 'For Sale'
                ? 'FOR SALE'
                : `SOLD ${idx + 1}/${idx * 2 + 3}/${2017 + (idx % 2)}`}
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
          <a href={`/${house._id}`} className="zestimate-similar-address-link">
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

const imageUrl = [
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/1.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/10.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/11.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/12.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/2.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/2gf_5vW49h0.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/3.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/4.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/5.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/6.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/7.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/8.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/9.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/9ZeOXrR0Ffs.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/APGl9xqpTDs.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/CswKfD546Z8.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/GEhaPt3niJs.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/GcHar4P8V_Q.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/HBxRMMqYxeQ.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/I6yRI5OcAwU.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/JaXs8Tk5Iww.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/NwBx723XaHw.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/OI3BVhWoli0.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/PzwbYT4qsHk.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/SH0iJ3DgeAY.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/T6Wbmgs87D0.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/TORI6YW1fHE.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/Uh7B6L8ZIeg.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/V3KpDE4WlW8.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/X6UzmQlPanM.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/YUTHEaYxzUU.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/Zz6GqtcRSqA.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/i5wk7pPTarY.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/jENOrTpc8Ug.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/nBuiLbz_j4A.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/qJMAshiwvas.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/qZSmC5OsFm4.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/uYw3xYkF9jw.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/vElTvnQVNA4.jpg',
  'https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/wd0Cduvio9s.jpg',
];

export default SimilarHomeTemplate;
