import React from 'react';
import ZestimateDetails from './ZestimateDetails.js';
import Template from './Template.js';

const Home = class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      zestimateInside: false,
      selected: 10,
    };
    this.expandHome = this.expandHome.bind(this);
    this.getSelected = this.getSelected.bind(this);
  }

  expandHome() {
    this.setState({ zestimateInside: !this.state.zestimateInside });
  }

  getSelected(years) {
    this.setState({ selected: years });
  }

  render() {
    const zestimate = this.props.current.zestimate;
    const currentZest = zestimate[zestimate.length - 1];
    const low = zestimate.slice(-1)[0] - 29374;
    const high = zestimate.slice(-1)[0] + 28612;
    const lastMonth = currentZest - zestimate[zestimate.length - 2];
    const lastMonthChange = (
      lastMonth / zestimate[zestimate.length - 1]
    ).toFixed(2);
    const forecast = high + 7298;
    const forecastChange = (forecast / currentZest - 1).toFixed(2);
    const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
      <div id="home-main-container">
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
            <span id="zestimate-range-image-container" />
            <div id="zestimate-range-title-container">
              <div id="zestimate-range-title">
                Zestimate Range
                <a tabIndex="0" id="zestimate-A_6" />
              </div>
              <div id="zestimate-range-value">
                $
                {numberWithCommas(low)}
                {' '}
- $
                {numberWithCommas(high)}
              </div>
            </div>
          </div>
          <div id="zestimate-change-container">
            <span
              id="zestimate-change-image-container"
              className={
                lastMonth > 0 ? 'zestimate-change-up' : 'zestimate-change-down'
              }
            />
            <div id="zestimate-change-title-container">
              <div id="zestimate-change-title">Last 30 Day Change</div>
              <div id="zestimate-change-value">
                {lastMonth > 0
                  ? `$+${numberWithCommas(lastMonth)}`
                  : `-$${numberWithCommas(Math.abs(lastMonth))}`}
                {' '}
                <span
                  id="zestimate-change-percentage"
                  className={
                    lastMonth < 0
                      ? 'zestimate-percentage-decrease'
                      : 'zestimate-percentage-increase'
                  }
                >
                  (
                  {lastMonthChange}
                  %)
                </span>
              </div>
            </div>
          </div>
          <div id="zestimate-forecast-container">
            <span id="zestimate-forecast-image" />
            <div id="zestimate-forecast-image-container">
              <div id="zestimate-forecast-value-container">
                One Year Forecast
                <a tabIndex="0" id="zestimate-A_18" />
              </div>
              <div id="zestimate-forecast-value-container">
                <span id="zestimate-forecast-value">
                  $
                  {numberWithCommas(forecast)}
                  {' '}
                  <span
                    id="zestimate-forecast-percentage"
                    className={
                      forecast > high
                        ? 'zestimate-percentage-increase'
                        : 'zestimate-percentage-decrease'
                    }
                  >
                    (+
                    {forecastChange}
                    %)
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div id="zestimate-history-container">
          {!this.state.zestimateInside && (
            <a onClick={this.expandHome} id="zestimate-history-title">
              Zestimate history &amp; details
              {' '}
              <b>&or;</b>
            </a>
          )}
        </div>
        {this.state.zestimateInside && (
          <ZestimateDetails
            status={this.props.status}
            graph={this.state.zestimateInside}
            getSelected={this.getSelected}
            selected={this.state.selected}
            collapse={this.expandHome}
          />
        )}
      </div>
    );
  }
};

export default Template(Home, 'Home');
