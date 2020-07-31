import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArtistSearchItem = ({ id, name }) => (
  <section key={id}>
    <Link to={`/discography/${name}&${id}`}>
      <p>{name}</p>
    </Link>
  </section>
);

ArtistSearchItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default ArtistSearchItem;
