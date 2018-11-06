import React from 'react';

const Price = ({ status, expand }) => (
  <div id="price-main-container" className="main-expand-container">
    <div>
      <section>
        <h2
          id="price-header"
          className={status ? 'header-toggle expanded' : 'header-toggle'}
          onClick={() => expand('price')}
        >
          <span className="header-span">Price / Tax History</span>
          {status ? (
            <img className="chev" src="./down.png" />
          ) : (
            <img className="chev" src="./up.png" />
          )}
        </h2>
        {status && (
          <div className="sub-container" id="price-active">
            <div>
              <ul>
                <li>
                  <a href="#hdp-price-history">Price History</a>
                </li>
                <li>
                  <a href="#hdp-tax-history">Tax History</a>
                </li>
              </ul>
              <div>
                <div>
                  <div>
                    <table>
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Event</th>
                          <th>Price</th>
                          <th />
                          <th>$/sqft</th>
                          <th>Source</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>3/27/2018</td>
                          <td>Listed for sale</td>
                          <td>$13,800,000</td>
                          <td>--</td>
                          <td>$2,408</td>
                          <td>Realogics Sotheby's International Realty</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      <a>Report issue with price history</a>
                    </p>
                  </div>
                </div>
              </div>
              <div />
            </div>
          </div>
        )}
      </section>
    </div>
  </div>
);

export default Price;
