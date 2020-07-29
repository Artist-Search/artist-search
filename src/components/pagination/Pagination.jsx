import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ offset, previousOffset, nextOffset, totalOffset }) => (
  <>
    <button disable={offset === 0} onClick={previousOffset} >Previous</button>
    <button disable={offset === totalOffset} onClick={nextOffset}>Next</button>
  </>

);

Pagination.propTypes = {
  offset: PropTypes.number.isRequired, 
  previousOffset: PropTypes.func.isRequired, 
  nextOffset: PropTypes.func.isRequired,
  totalOffset: PropTypes.number.isRequired
};

export default Pagination;

