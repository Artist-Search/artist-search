import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ offset, prevPage, nextPage, count }) => (

  
  <>
    <button disable={offset === 0} onClick={prevPage} >Previous</button>

    <button disable={offset >= count} onClick={nextPage}>Next</button>
  </>
);

Pagination.propTypes = {
  offset: PropTypes.number.isRequired, 
  prevPage: PropTypes.func.isRequired, 
  nextPage: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};

export default Pagination;
