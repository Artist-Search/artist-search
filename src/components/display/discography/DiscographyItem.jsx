import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DiscographyItem = ({ id, name }) => (
  <section key={id}>
    <Link to={`/discography/${name}&${id}`}>
      <p>{name}</p>
    </Link>
  </section>
);

DiscographyItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default DiscographyItem;
