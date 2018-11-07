import React from 'react';

const MortgageChartLegend = ({ data }) => {
  const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <div id="mortgage-chart-legend">
      <div>
        P&I
        <span>
          <b>
            {' $'}
            {numberWithCommas(data.pni)}
          </b>
        </span>
      </div>
      <div>
        Insurance
        <span>
          <b>
            {' $'}
            {numberWithCommas(data.insurance)}
          </b>
        </span>
      </div>
      <div>
        Taxes
        <span>
          <b>
            {' $'}
            {numberWithCommas(data.taxes)}
          </b>
        </span>
      </div>
      <div>
        PMI
        <span>
          <b>
            {' $'}
            {numberWithCommas(data.pmi)}
          </b>
        </span>
      </div>
      <div>
        HOA
        <span>
          <b>
            {' $'}
            {numberWithCommas(data.hoa)}
          </b>
        </span>
      </div>
    </div>
  );
};

export default MortgageChartLegend;
