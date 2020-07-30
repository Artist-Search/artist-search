import React from 'react';
import PropTypes from 'prop-types';
import ArtistSearchList from './ArtistSearchList';
import Pagination from '../pagination/Pagination';

const ArtistSearchResults = ({ artists }) => (
  <section>
    <Pagination totalOffset={totalOffset}/>
    <ArtistSearchList artists={artists}/>
    Check this page, I like bands!
  </section>
);

ArtistSearchResults.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired
};

export default ArtistSearchResults;
