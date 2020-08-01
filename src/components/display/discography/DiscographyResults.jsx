import React from 'react';
import PropTypes from 'prop-types';
import DiscographyList from './DiscographyList';

const DiscographyResults = ({ discography }) => (
  <section>
    <DiscographyList discography={discography} />
  </section>
);

DiscographyResults.propTypes = {
  discography: PropTypes.array.isRequired
};

export default DiscographyResults;
