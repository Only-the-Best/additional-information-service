import React from 'react';
import SimilarHomeTemplate from './SimilarHomeTemplate.js';

const ComparableHome = ({ houses }) => (
  <SimilarHomeTemplate houses={houses} start={0} stop={10} />
);

export default ComparableHome;
