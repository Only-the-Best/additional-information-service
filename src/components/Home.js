import React from 'react';
import ZestimateDetails from './ZestimateDetails.js';
import Template from './Template.js';
import ZestimateChart from './ZestimateChart.js';
import GraphNavbar from './GraphNavbar.js';




const Home = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zestimateInside: false,
      selected: 10,
    };
    this.zestimate = this.props.current.zestimate;
    this.currentZest = this.zestimate[this.zestimate.length - 1];
    this.low = this.zestimate.slice(-1)[0] - 29374;
    this.high = this.zestimate.slice(-1)[0] + 28612;
    this.lastMonth = this.currentZest - this.zestimate[this.zestimate.length - 2];
    this.lastMonthChange = (this.lastMonth / this.zestimate[this.zestimate.length - 1]).toFixed(2);
    this.forecast = this.high + 7298;
    this.forecastChange = ((this.forecast / this.currentZest) - 1).toFixed(2);
    this.expandHome = this.expandHome.bind(this);
    this.getSelected = this.getSelected.bind(this);
  }

  expandHome() {
    this.setState({ zestimateInside: !this.state.zestimateInside });
  }

  getSelected(years) {
    this.setState({selected: years});
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
                ${this.low} - ${this.high}
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
                {this.lastMonth > 0 ? `$+${this.lastMonth}` : `-$${this.lastMonth}`} <span id="zestimate-change-percentage" className={this.lastMonth < 0 ? 'zestimate-percentage-decrease' : 'zestimate-percentage-increase'}>({this.lastMonthChange}%)</span>
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
                <span id="zestimate-forecast-value">${this.forecast} <span id="zestimate-forecast-percentage" className={this.lastMonth < 0 ? 'zestimate-percentage-decrease' : 'zestimate-percentage-increase'}>(+{this.forecastChange}%)</span></span>
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
        {this.state.zestimateInside && <GraphNavbar selected={this.state.selected} handleClick={this.getSelected}/>}
        {this.state.zestimateInside && (
          <ZestimateChart selected={this.state.selected}/>
        )}
        </div>
    );
  }
};

export default Template(Home, 'Home');
