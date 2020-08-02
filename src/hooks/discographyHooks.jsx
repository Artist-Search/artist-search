import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneArtist } from '../services/getArtists.js';
import { usePaginationHooks } from '../hooks/paginationHooks';

export const useDiscographysHooks = () => {
  const [discography, setDiscography] = useState([]);
  const { offset, count } = usePaginationHooks();

  const { id } = useParams();
  const { name } = useParams();

  useEffect(() => {
    getOneArtist(id, offset || 1)
      .then(({ releases }) => setDiscography(releases));
  }, [offset]);

  return {
    discography, 
    id, 
    name, 
    offset, 
    count
  };
};
