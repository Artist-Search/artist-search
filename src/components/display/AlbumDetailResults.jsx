import React from 'react';
import PropTypes from 'prop-types';
import AblumSearchList from './AblumSearchList'

const AlbumDetailResults = ({ recordings }) => (
  <section>
    <AblumSearchList recordings={recordings}/>
  </section>
);

AlbumDetailResults.propTypes = {
  recordings: PropTypes.array.isRequired
};

export default AlbumDetailResults;