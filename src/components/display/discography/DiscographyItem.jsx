import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DiscographyItem = ({ discography, id, name }) => {
  return discography.map((element, i) => (
    <section key={i}>
      <Link to={`/album/${name}/${id}`}>
        <p>{element.title}</p>
      </Link>
    </section>
  )
  );};

DiscographyItem.propTypes = {
  artistName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default DiscographyItem;
