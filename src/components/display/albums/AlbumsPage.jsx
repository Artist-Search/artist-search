import React from 'react';
// import PropTypes from 'prop-types';
import { useDiscographysHooks } from '../../../hooks/discographyHooks';
import ReactImageFallback from 'react-image-fallback';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const AlbumsPage = () => {

  const {
    discography
  } = useDiscographysHooks();

  const { name } = useParams();

  console.log(discography);
  return discography.map((discography) => (
    <>
      <Link to={`/albumdetails/${name}/${discography.releaseId}`}>
        <section key={discography.releaseId}>
      
          <h4>{discography.title}</h4>
          <ReactImageFallback 
            src={`http://coverartarchive.org/release/${discography.releaseId}/front`} 
            fallbackImage={'https://images-na.ssl-images-amazon.com/images/I/81JVkQR1mtL._AC_SY450_.jpg'}
            width='250px'/>
     
        </section>
      </Link>
    </>

  ));
};

AlbumsPage.propTypes = {

};

export default AlbumsPage;

