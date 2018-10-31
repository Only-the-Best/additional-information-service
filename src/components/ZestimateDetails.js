import React from 'react';
import ComparableHomes from "./ComparableHomes";
import LocalSalePrices from "./LocalSalePrices";

export default class ZestimateDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comparableHomes: false,
      localSalePrices: false,
    };
    this.expandComparable = this.expandComparable.bind(this);
    this.expandLocalSale = this.expandLocalSale.bind(this);
  }
  expandComparable() {
    this.setState({ comparableHomes: !this.state.comparableHomes });
  }

  expandLocalSale() {
    this.setState({ localSalePrices: !this.state.localSalePrices });
  }
  render() {
    return (
      <div id="expand-zestimate-details-container">
        <div id="inside-zestimate-summary-container">
          <h3 id="inside-zestimate-title">Inside the Zestimate</h3>
          <p id="inside-zestimate-description">
            The Zestimate is Zillow’s best estimate of a home’s value. It
            is based on a blend of valuation methods, each of which may
            produce a different estimate depending on the available data.
          </p>
          <h4 id="estimate-based-on-title">Estimate based on</h4>
          <div id="zestimate-subcat-container">
            <section
              id="expand-comparable-homes"
              onClick={this.expandComparable}
            >
              <div id="comparable-homes-summary">
                <span id="comparable-homes-title-spacing" />
                <div id="comparable-homes-label">
                        <span id="comparable-homes-label">
                          Comparable homes
                        </span>
                  <span id="comparable-homes-average">$1,839,752</span>
                  {this.props.status ? (
                    <img className="zest-chev" src="./down.png" />
                  ) : (
                    <img className="zest-chev" src="./up.png" />
                  )}
                </div>
              </div>
            </section>
            {this.state.comparableHomes && <ComparableHomes comparable={this.props.comparable}/>}
            <section
              id="expand-local-sale-prices"
              onClick={this.expandLocalSale}
            >
              <div id="local-sale-prices-summary">
                <span id="local-sale-prices-spacing" />
                <div id="local-sale-prices-title">
                        <span id="local-sale-prices-label">
                          Local sale prices
                        </span>
                  {' '}
                  <span id="local-sale-prices-average">$12,669,861</span>
                  {this.props.status ? (
                    <img className="zest-chev" src="./down.png" />
                  ) : (
                    <img className="zest-chev" src="./up.png" />
                  )}
                </div>
              </div>
            </section>
            {this.state.localSalePrices && <LocalSalePrices />}
          </div>
        </div>
      </div>
    );
  }
}
