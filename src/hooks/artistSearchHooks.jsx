import { useState, useEffect } from 'react';
import { getArtists } from '../services/getArtists.jsx';

export const useArtistSearchHooks = () => {
  const [artist, setArtist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArtists()
      .then(({ artist }) => {
        setArtist(artist);
      })
      .finally(() => setLoading(false));
  }, []);


  return {
    artist,
    loading 
  };
 
};
