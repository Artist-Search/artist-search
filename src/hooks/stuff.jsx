// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getOneArtist } from '../services/getArtists.js';

// export const useDiscographysHooks = () => {
//   const [discography, setDiscography] = useState([]);
//   const [releases, setReleases] = useState([]);
//   const [releaseId, setReleaseId] = useState();
//   const [title, setTitle] = useState();
//   // const [coverArt, setCoverArt] = useState();
//   const { id } = useParams();
//   const { name } = useParams();
 
  
//   //   setId(location.params.id);

//   useEffect(() => {
//     getOneArtist(id)
    
//       .then(discography => setDiscography(discography))
//       .then(releases => releases.map(release => (
//         releaseId: releases.id,
//         title: releases.title,
//         // coverArt: releases.cover-art-archive.artwork,
//   )))
//   }, []);

// //add logic for if coverArt === true, display coverArt, else, display placeholder

//   return {
//     discography, 
//     releases,
//     releaseId,
//     title,
//     // coverArt,
//     id, 
//     name
//   };
// };
