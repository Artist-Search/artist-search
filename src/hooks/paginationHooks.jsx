import React, { useState }  from 'react';
import Pagination from '../components/pagination/Pagination';

export const usePaginationHooks = () =>  {
  const [offset, setOffset] = useState(0);
  const [totalOffset, setTotalOffset] = useState(0);

  const previousOffset = () => setOffset(offset => offset - 25, 0);
  const nextOffset = () => setOffset(offset => offset + 25, totalOffset);

  
  return {
    offset, 
    previousOffset,
    nextOffset, 
    setTotalOffset, 
    Pagination: (<Pagination 
      totalOffset={totalOffset}
      offset={offset}
      nextOffset={nextOffset}
      setTotalOffset={setTotalOffset}
    />)
  };
};

