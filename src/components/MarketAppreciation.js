import React from 'react';
import moment from 'moment';

const MarketAppreciation = ({ market }) => {
  const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const current = market[market.length - 1];
  const lastSold = market.slice(-49)[0];
  const percentage = ((current * 100) / lastSold).toFixed(1);
  return (
    <div className="zestimate-subexpand-container" id="market-expand-container">
      <div className="zestimate-subexpand-explanation-container">
        <div className="zestimate-subexpand-explanation" data-test="market">
          <br />
          This estimate takes the price this home last sold for and adjusts it
          by the percentage change in market value for that area since that
          sale.
          <span>
            {' '}
            <span>
              <a className="zestimate-accuracy-link">
                What affects the accuracy of this estimate?
              </a>
            </span>
          </span>
        </div>
        <div className="zestimate-compare-container">
          <h5 className="how-calculated-header">How it’s calculated:</h5>
          <div className="zestimate-compare-before">
            <div className="zestimate-compare-value">
              $
              {numberWithCommas(Math.floor(lastSold))}
              {' '}
              <span className="zestimate-compare-before-title">
                Last sale price
              </span>
              {' '}
              <br />
              <span className="market-date">
                Last sale date:
                {' '}
                {moment()
                  .subtract('4', 'years')
                  .calendar()}
              </span>
            </div>
            <h3 className="compare-symbol">+</h3>
            <div className="zestimate-compare-percent">
              {percentage}
               %
              {' '}
              <span className="zestimate-compare-percent-value">
                Local market appreciation since sale
              </span>
            </div>
            <h3 className="compare-symbol">=</h3>
            <div className="zestimate-compare-value-after">
              $
              {numberWithCommas(Math.floor(current + 596))}
              {' '}
              <span className="zestimate-compare-after">
                sale-based estimate
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAppreciation;
