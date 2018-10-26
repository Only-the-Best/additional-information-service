import React from 'react';
import ZestimateDetails from './ZestimateDetails.js';
import Template from './Template.js';

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
      <div>
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
            <div id="zestimate-main-label">
              Zestimate
              <a tabIndex="0"  />
            </div>
            <div id="zestimate-dollar-container">
              <div id="zestimate-dollar-display">$10,976,394</div>
            </div>
          </div>
        </div>
        <div>
          <div id="zestimate-range-change-container">
            <div id="zestimate-range-container">
              <span id="zestimate-range-icon" />
              <div id="zestimate-range-label-container">
                <div id="zestimate-range-label">
                  Zestimate Range
                  <a tabIndex="0" />
                </div>
                <div id="zestimate-range-amount">$10.43M - $11.53M</div>
              </div>
            </div>
            <div id="zestimate-change-container">
              <span id="zestimate-change-icon" />
              <div id="zestimate-change-label-container">
                <div id="zestimate-change-title">Last 30 Day Change</div>
                <div id="zestimate-change-amount">
                  +$208,300
                  {' '}
                  <span id="zestimate-change-percent">(+1.9%)</span>
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
          {this.state.zestimateInside && <ZestimateDetails status={this.props.status}/>}
        </div>
        <div />
      </div>
    );
  }
};

export default Template(Home, 'Home');
