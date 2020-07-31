import React, { useState, useEffect } from 'react';
import ArtistSearchResults from '../components/display/ArtistSearchResults';
import { getArtists } from '../services/getArtists.jsx';
import { useHandleSubmit } from './handelChangeSubmit';

export const useArtistSearchHooks = () => {
  const [artist, setArtist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArtists()
      .then(({ artists }) => {
        setArtist(artist);
      })
      .finally(() => setLoading(false));
  }, []);


  return {
    artist,
    loading 
  };
 
};
