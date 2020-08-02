import React from 'react';
import { useAlbumDetailHooks } from '../../../hooks/albumDetailsHooks';
import { getRecordingsList } from '../../../services/getArtists';
import { useParams } from 'react-router-dom';

// console.log(discography);
const AlbumDetails = () => {

  const {
    album, 
    albumid,
    name
  } = useAlbumDetailHooks();
      
  //   const { name, albumid } = useParams();
  //   const { albumid } = useParams();
      
  console.log(name);
  console.log(albumid);
  //   console.log('album', album);

  return album.map((album) => (
    <>
      <section key={album.id}>
        <h4>{album.title}</h4>
      </section>

    </>

  ));
};

export default AlbumDetails;
