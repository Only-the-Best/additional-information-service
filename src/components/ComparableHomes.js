import React from 'react';
import ComparableHome from './ComparableHome.js';

const ComparableHomes = ({ houses }) => (
  <div className="zestimate-subexpand-container">
    <div className="zestimate-subexpand-explanation-container">
      <div className="zestimate-subexpand-explanation" data-test="comparable">
        <br />
        This estimate looks at for-sale or recently sold homes with similar
        features to this home, like its location, square footage and beds/baths.
        We then adjust the price of each comparable home based on its
        “similarity score” and local appreciation rate and use that set of
        adjusted values to calculate this estimate.
        <span>
          {' '}
          <span>
            <a className="zestimate-accuracy-link">
              What affects the accuracy of this estimate?
            </a>
          </span>
        </span>
      </div>
    </div>
    <div className="zestimate-subdetail-heading-container">
      <br />
      <b>
        <p className="zestimate-subdetail-title-name">
          Top comparables in this estimate
        </p>
      </b>
      <b>
        <p className="zestimate-subdetail-value-name" id="dollar-per-sqfoot">
          $/sqft
          {' '}
        </p>
      </b>
    </div>
    <ComparableHome houses={houses} />
  </div>
);

export default ComparableHomes;
