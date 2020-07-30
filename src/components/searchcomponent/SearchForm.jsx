import React from 'react';
import PropTypes from 'prop-types';
//preventDefault in hook

const SearchForm = ({ searchQuery, onChange, onSubmit }) => {
  
  
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="searchQuery" value={searchQuery} onChange={onChange} />
      <button>Search Artist</button>
    </form>
  );
};

SearchForm.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
