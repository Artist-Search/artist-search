import React from 'react';
import PropTypes from 'prop-types';

const Lyrics = ({ songTitle, lyrics }) => {
  return (
    <>
      <h1>{songTitle}</h1>
      <div>
        <p>{lyrics}</p>
      </div>
    </>
  );
};

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired,
  songTitle: PropTypes.string.isRequired
};

export default Lyrics;
