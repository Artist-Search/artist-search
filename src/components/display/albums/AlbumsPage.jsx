import React from 'react';
// import PropTypes from 'prop-types';
import { useDiscographysHooks } from '../../../hooks/discographyHooks';
import { getCoverArt } from '../../../services/getArtists';
import ReactImageFallback from 'react-image-fallback';

const AlbumsPage = () => {

  const {
    discography
  } = useDiscographysHooks();


  console.log(discography);
  return discography.map((discography) => (
    <section key={discography.releaseId}>
      <h4>{discography.title}</h4>
      <ReactImageFallback 
        src={`http://coverartarchive.org/release/${discography.releaseId}/front`} 
        fallbackImage={'https://images-na.ssl-images-amazon.com/images/I/81JVkQR1mtL._AC_SY450_.jpg'}
        width='250px'/>
      
    </section>

  ));
};

AlbumsPage.propTypes = {

};

export default AlbumsPage;

