import React from 'react';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bonus: false,
    };
    this.expandHome = this.expandHome.bind(this);
  }
  expandHome() {
    this.setState({bonus: !this.state.bonus});
  }
  render(){
    return (
      <div className='container'>
        <div >
          <section >
            <h2 id='home-header' className={status ? 'header-toggle expanded' : 'header-toggle'} onClick={() => this.props.expand('home')}>
              <span className='header-span'  >Home Value</span>
              {this.props.status ? <img className="chev" src='./down.png'/>
                : <img className="chev" src='./up.png'/>}
            </h2>
            {this.props.status && (<div className='sub-container' id='home-active'>
              <div >
                <div id="home-banner-container">
                  <div>
                    <div id="home-banner-text">
                      The list price and Zestimate for this home are very different, so we might be missing something.
                    </div>
                  </div>
                </div>
                <div id="zestimate-detail-container">
                  <div id="zestimate-range-container">
                    <div id="zestimate-main-label">
                      Zestimate<a tabIndex="0" id="A_4"></a>
                    </div>
                    <div id="zestimate-dollar-container">
                      <div id="zestimate-dollar-display">
                        $10,976,394
                      </div>
                    </div>
                  </div>
                </div>
                <div >
                  <div id="zestimate-range-change-container">
                    <div id="zestimate-range-container">
                      <span id="zestimate-range-icon"></span>
                      <div id="zestimate-range-label-container">
                        <div id="zestimate-range-label">
                          Zestimate Range<a tabIndex="0" id="A_6"></a>
                        </div>
                        <div id="zestimate-range-amount">
                          $10.43M - $11.53M
                        </div>
                      </div>
                    </div>
                    <div id="zestimate-change-container">
                      <span id="zestimate-change-icon"></span>
                      <div id="zestimate-change-label-container">
                        <div id="zestimate-change-title">
                          Last 30 Day Change
                        </div>
                        <div id="zestimate-change-amount">
                          +$208,300 <span id="zestimate-change-percent">(+1.9%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="zestimate-history-container">
                    {!this.state.bonus && <a onClick={this.expandHome} id="zestimate-history-title">Zestimate history &amp; details</a>}
                  </div>
                  {this.state.bonus  && <div id="expand-home-container">
                    <div id="DIV_1">
                      <h3 id="H3_2">
                        Inside the Zestimate
                      </h3>
                      <p id="P_3">
                        The Zestimate is Zillow’s best estimate of a home’s value. It is based on a blend of valuation methods, each of which may produce a different estimate depending on the available data.
                      </p>
                      <h4 id="H4_4">
                        Estimate based on
                      </h4>
                      <div id="DIV_5">
                        <section id="SECTION_6">
                          <div id="DIV_7">
                            <span id="SPAN_8"></span>
                            <div id="DIV_9">
                              <span id="SPAN_10">Comparable homes</span> <span id="SPAN_11">$1,839,752</span>
                            </div>
                          </div>
                          <div id="DIV_12">
                          </div>
                        </section>
                        <section id="SECTION_13">
                          <div id="DIV_14">
                            <span id="SPAN_15"></span>
                            <div id="DIV_16">
                              <span id="SPAN_17">Local sale prices</span> <span id="SPAN_18">$12,669,861</span>
                            </div>
                          </div>
                          <div id="DIV_19">
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>}
                  <div >
                    <div >
                      <p >
                      </p>
                    </div>
                  </div>
                </div>

                <div >
                </div>
              </div>
            </div>)}
          </section>
        </div>
      </div>
    );
  }
}
