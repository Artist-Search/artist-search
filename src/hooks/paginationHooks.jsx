import React, { useState }  from 'react';
import Pagination from '../components/pagination/Pagination';
import { getOneArtist } from '../services/getArtists';

export const usePaginationHooks = () =>  {
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);

  const prevPage = () => setOffset(offset => offset - 25, 0);
  const nextPage = () => setOffset(offset => offset + 25, count);

  return {
    offset, 
    prevPage,
    nextPage, 
    count, 
    Pagination: (<Pagination 
      offset={offset}
      prevPage={prevPage}
      nextPage={nextPage}
      count={count}
      setCount={setCount}
    />)
  };
};
