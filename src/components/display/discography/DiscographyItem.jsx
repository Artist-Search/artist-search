import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DiscographyItem = ({ artistName, albumName, artistId, albumId, albumImage  }) => (
  <section key={albumId}>
    <h1>{artistName}</h1>
    <Link to={`/discography/${artistName}&${artistId}`}>
      <img src={albumImage} />
      <p>{albumName}</p>
    </Link>
  </section>
);

DiscographyItem.propTypes = {
  artistName: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  artistId: PropTypes.string.isRequired,
  albumId: PropTypes.string.isRequired,
  albumImage: PropTypes.string.isRequired
};

export default DiscographyItem;
