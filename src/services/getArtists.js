export const getArtists = artistName => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&limit=25`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json()
    )
    .then(({ artist }) => ({
      resultCount: artist.count,
      offset: artist.offset,
      artists: artist.artists
      
    })
      .then(console.log(artist)));
};
