import React from 'react';
import SimilarHomeTemplate from './SimilarHomeTemplate.js';

const LocalSaleHome = ({ houses }) => (
  <SimilarHomeTemplate houses={houses} start={10} stop={20} />
);

export default LocalSaleHome;
