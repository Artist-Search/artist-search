import React from 'react';
import DiscographyResults from '../discography/DiscographyResults';
// import Pagination from '../../pagination/Pagination';
// import { getOneArtist } from '../../../services/getArtists';
import { useDiscographysHooks } from '../../../hooks/discographyHooks';

// import PropTypes from 'prop-types';


const DiscographyPage = () => {
  
  const {
    discography,
    id,
    name
  } = useDiscographysHooks();

  console.log(name);
  console.log(id);
  console.log(discography);
  
  return (
    
    <div>
      {/* <DiscographyResults discography={discography}/> */}
      This is the Discography Page
    </div>
  );
};

DiscographyPage.propTypes = {

};

export default DiscographyPage;

