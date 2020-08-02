import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecordingsList } from '../services/getArtists.js';

export const useAlbumDetailHooks = () => {
  const [album, setAlbum] = useState([]);

  const { albumid } = useParams();
  const { name } = useParams();

  // console.log(albumid);
  useEffect(() => {
    getRecordingsList(albumid)
      .then(({ recordings }) => setAlbum(recordings));
  }, []);

  // console.log('album', album);
  return {
    album, 
    albumid, 
    name
  };
};
