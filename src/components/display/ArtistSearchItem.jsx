import React from 'react';
import PropTypes from 'prop-types';

const ArtistSearchItem = ({ id, name }) => (
  <p>{name} - {id}</p>
);

ArtistSearchItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default ArtistSearchItem;
