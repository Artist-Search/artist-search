import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getLyrics } from '../services/getArtists.js';

export const useLyricsHooks = () => {
  const [lyrics, setLyrics] = useState([]);
  const match = useRouteMatch('/:artistName/:songTitle');

  useEffect(() => {
    getLyrics(match.params.artistName, match.params.songTitle)
      .then(lyrics => setLyrics(lyrics));
  }, []);

  return {
    lyrics
  };
 
};
