import React from 'react';
import SimilarHomeTemplate from './SimilarHomeTemplate.js';

const ComparableHome = ({ houses }) => (
  <SimilarHomeTemplate houses={houses} start={20} stop={30} />
);

export default ComparableHome;
