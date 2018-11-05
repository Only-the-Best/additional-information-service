import React from 'react';

const Neighborhood = ({ status, expand }) => (
  <div className="main-expand-container">
    <div>
      <section>
        <h2
          id="neighborhood-header"
          className={status ? 'header-toggle expanded' : 'header-toggle'}
          onClick={() => expand('neighborhood')}
        >
          <span className="header-span">Neighborhood: SOMEPLACE</span>
          {status ? (
            <img className="chev" src="./down.png" />
          ) : (
            <img className="chev" src="./up.png" />
          )}
        </h2>
        {status && (
          <div className="sub-container" id="neighborhood-active">
            <div>
              <ul>
                <li>
                  <a href="#hdp-price-history">Neighborhood Stuff</a>
                </li>
                <li>
                  <a href="#hdp-tax-history" />
                </li>
              </ul>
              <div>
                <div>
                  <img className="map" src="./map.png" />
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

export default Neighborhood;
