import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getLyrics } from '../services/getArtists.js';

export const useLyricsHooks = () => {
  const [lyrics, setLyrics] = useState([]);
  
  const { name, title } = useParams();


  useEffect(() => {
    getLyrics(name, title)
      .then(lyrics => setLyrics(lyrics));
  }, []);

  console.log('name', name);
  console.log('title', title);

  return {
    lyrics
  };
 
};
