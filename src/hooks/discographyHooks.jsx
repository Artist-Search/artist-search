import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneArtist } from '../services/getArtists.js';

export const useDiscographysHooks = () => {
  const [discography, setDiscography] = useState([]);
  const { id } = useParams();
  const { name } = useParams();
  
  //   setId(location.params.id);

  useEffect(() => {
    getOneArtist(id)
      .then(discography => setDiscography(discography));
  }, []);

  return {
    discography, 
    id, 
    name
  };
 
};
