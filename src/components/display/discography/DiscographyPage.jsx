import React from 'react';
import DiscographyItem from '../discography/DiscographyItem';
import { useDiscographysHooks } from '../../../hooks/discographyHooks';

const DiscographyPage = () => {
  
  const {
    discography,
    id,
    name
  } = useDiscographysHooks();

  // console.log(name);
  // console.log(id);
  // console.log(discography);
  
  return (
    
    <div>
      <h3>Albums by {name}</h3>
      <DiscographyItem discography={discography} name={name} id={id}/>
    </div>
  );
};

export default DiscographyPage;
