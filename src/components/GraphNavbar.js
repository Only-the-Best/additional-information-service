import React from 'react';

const GraphNavbar = ({selected, handleClick}) => (
  <div id='zestimate-graph-toolbar'>
    <div id='zestimate-graph-selector-container'>
      <a className={`zestimate-graph-selector ${selected === 1 ? 'selected' : ''}`} onClick={() => handleClick(1)}>1 year</a>
      <a className={`zestimate-graph-selector ${selected === 5 ? 'selected' : ''}`} onClick={() => handleClick(5)}>5 years</a>
      <a className={`zestimate-graph-selector ${selected === 10 ? 'selected' : ''}`} onClick={() => handleClick(10)}>10 years</a>
    </div>
  </div>
);

export default GraphNavbar;