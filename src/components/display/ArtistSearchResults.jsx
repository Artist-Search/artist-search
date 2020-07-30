import React from 'react';
import PropTypes from 'prop-types';
import ArtistSearchList from './ArtistSearchList';
import Pagination from '../pagination/Pagination';
// import { withList } from '../hoc/withList';


// const { count, offset, artists } = this.props.searchResults;

const ArtistSearchResults = ({ artists, count, offset }) => (

  <section>
    {/* <Pagination totalOffset={totalOffset}/> */}
    {/* <Pagination /> */}
    {/* <ArtistSearchList artists={artists}/> */}

    Check this page, I like bands!
  </section>
);

ArtistSearchResults.propTypes = {
  // searchResults: PropTypes.arrayOf(PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   id: PropTypes.string.isRequired
  // })).isRequired
  artists: PropTypes.array.isRequired, 
  count: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired
};


export default ArtistSearchResults;
