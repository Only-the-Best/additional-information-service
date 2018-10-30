import React from 'react';
import ZestimateDetails from './ZestimateDetails.js';
import Template from './Template.js';
import ZestimateChart from './ZestimateChart.js';

const Home = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zestimateInside: false,
    };
    this.expandHome = this.expandHome.bind(this);
  }

  expandHome() {
    this.setState({ zestimateInside: !this.state.zestimateInside });
  }

  render() {
    return (
      <div id="home-main-container" >
        <div id="home-banner-container">
          <div>
            <div id="home-banner-text">
              The list price and Zestimate for this home are very different, so
              we might be missing something.
            </div>
          </div>
        </div>
        <div id="zestimate-detail-container">
          <div id="zestimate-range-container">
            <span id="zestimate-range-image-container"></span>
            <div id="zestimate-range-title-container">
              <div id="zestimate-range-title">
                Zestimate Range<a tabIndex="0" id="zestimate-A_6"></a>
              </div>
              <div id="zestimate-range-value">
                $11.67M - $13.89M
              </div>
            </div>
          </div>
          <div id="zestimate-change-container">
            <span id="zestimate-change-image-container"></span>
            <div id="zestimate-change-title-container">
              <div id="zestimate-change-title">
                Last 30 Day Change
              </div>
              <div id="zestimate-change-value">
                -$44,075 <span id="zestimate-change-percentage">(-0.4%)</span>
              </div>
            </div>
          </div>
          <div id="zestimate-forecast-container">
            <span id="zestimate-forecast-image"></span>
            <div id="zestimate-forecast-image-container">
              <div id="zestimate-forecast-value-container">
                One Year Forecast<a tabIndex="0" id="zestimate-A_18"></a>
              </div>
              <div id="zestimate-forecast-value-container">
                <span id="zestimate-forecast-value">$12,979,582 <span id="zestimate-forecast-percentage">(+5.6%)</span></span>
              </div>
            </div>
          </div>
        </div>

          <div id="zestimate-history-container">
            {!this.state.zestimateInside && (
              <a onClick={this.expandHome} id="zestimate-history-title">
                Zestimate history &amp; details
              </a>
            )}
          </div>
          {this.state.zestimateInside && (
            <ZestimateDetails status={this.props.status} />
          )}
        {this.state.zestimateInside && (
          <ZestimateChart />
        )}
        </div>
    );
  }
};

export default Template(Home, 'Home');
