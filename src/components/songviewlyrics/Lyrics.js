import React from 'react';
import PropTypes from 'prop-types';
import { useLyricsHooks } from '../../hooks/lyricFetchHook';
import { useParams } from 'react-router-dom';

const Lyrics = () => {

  const {
    lyrics
  } = useLyricsHooks();

  const { name, title } = useParams();

  // console.log('lyrics', lyrics);
  return (
    <>
      <div>
        <h1>{name} - {title}</h1>
        <p>{lyrics.lyrics}</p>
      </div>
    </>
  );
};

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired,
  songTitle: PropTypes.string.isRequired
};

export default Lyrics;
