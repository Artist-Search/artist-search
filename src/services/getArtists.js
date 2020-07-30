export const getArtists = artistName => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&limit=25`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json()
    );
  // .then(results => results.map(result => ({
  //   resultCount: result.count,
  //   offset: result.offset,
  //   artists: result.artists
  // })));

};
