import React from 'react';
import PropTypes from 'prop-types';
import DiscographyList from './DiscographyList';

const DiscographyResults = ({ id }) => (
  <section>
    <DiscographyList id={id} />
  </section>
);

DiscographyResults.propTypes = {
  id: PropTypes.string.isRequired
};

export default DiscographyResults;
