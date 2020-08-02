import React from 'react';
import { useAlbumDetailHooks } from '../../../hooks/albumDetailsHooks';
import { Link } from 'react-router-dom';

const AlbumDetails = () => {

  const {
    album, 
    name
  } = useAlbumDetailHooks();
      
  //   console.log(name);
  //   console.log(albumid);
  //   console.log('album', album);

  return album.map((album) => (
    <>
      <Link to={`/lyrics/${name}/${album.title}`}>

        <section key={album.id}>
          <h4>{album.title}</h4>
        </section>
        
      </Link>
    </>

  ));
};

export default AlbumDetails;
