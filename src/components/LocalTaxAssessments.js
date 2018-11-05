import React from 'react';
import LocalTax from './LocalTax.js';

const LocalTaxAssessments = ({ houses, taxAssessment }) => {
  const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <div className="zestimate-subexpand-container" id="tax-expand-container">
      <div className="zestimate-subexpand-explanation-container">
        <div className="zestimate-subexpand-explanation" data-test="loocaltax">
          <br />
          This estimate looks at the regional average amount that homes sell for
          above or below their tax assessed value. We then use that number to
          determine the value of this home, based on its latest tax assessment.
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
        <div className="zestimate-compare-container">
          <br />
          <h5 className="how-calculated-header">How it’s calculated:</h5>
          <div className="zestimate-compare-before">
            <div className="zestimate-compare-value">
              $
              {numberWithCommas(Math.floor(taxAssessment * 0.64))}
              {' '}
              <span className="zestimate-compare-before-title">
                2017 tax-assessed value
              </span>
            </div>
            <h3 className="compare-symbol">+</h3>
            <div className="zestimate-compare-percent">
              36.0 %
              {' '}
              <span className="zestimate-compare-percent-value">
                average amount homes are selling for above their 2017
                tax-assessed value
              </span>
            </div>
            <h3 className="compare-symbol">=</h3>
            <div className="zestimate-compare-value">
              $
              {numberWithCommas(taxAssessment)}
              {' '}
              <span className="zestimate-compare-after">
                tax-based estimate
              </span>
            </div>
          </div>
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
        <LocalTax houses={houses} />
      </div>
    </div>
  );
};

export default LocalTaxAssessments;
