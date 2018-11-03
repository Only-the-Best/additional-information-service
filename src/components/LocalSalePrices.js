import React from 'react';
import LocalSaleHome from './LocalSaleHome.js';

const LocalSalePrices = ({ houses }) => (
  <div className="zestimate-subexpand-container">
    <div className="zestimate-subexpand-explanation-container">
      <div className="zestimate-subexpand-explanation" data-test="localsale">
        <br />
        This estimate looks at the regional average amount that homes sell for
        above or below their list price. We then use that number to determine
        the value of this home, based on its list price and other
        characteristics of the listing.
        {' '}
        <span>
          {' '}
          <span>
            <a className="zestimate-accuracy-link">
              What affects the accuracy of this estimate?
            </a>
          </span>
        </span>
      </div>
      <div className="zestimate-subdetail-heading-container">
        <br />
        <b>
          <p className="zestimate-subdetail-title-name">Recent sales</p>
        </b>
        <b>
          <p className="zestimate-subdetail-value-name">Sales-to-list</p>
        </b>
      </div>
      <LocalSaleHome houses={houses} />
    </div>
  </div>
);

export default LocalSalePrices;
