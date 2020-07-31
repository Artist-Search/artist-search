import React from 'react';
import PropTypes from 'prop-types';
import ArtistSearchList from './ArtistSearchList';

const ArtistSearchResults = ({ artists }) => (
  <section>
    <ArtistSearchList artists={artists}/>
  </section>
);

ArtistSearchResults.propTypes = {
  artists: PropTypes.array.isRequired
};

export default ArtistSearchResults;
