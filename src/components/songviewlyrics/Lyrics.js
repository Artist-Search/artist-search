import React from 'react';
import PropTypes from 'prop-types';

const Lyrics = ({ title, lyrics }) => {
  return (
    <>
      <h1>{title}</h1>
      <div>
        <p>{lyrics}</p>
      </div>
    </>
  );
};

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Lyrics;



