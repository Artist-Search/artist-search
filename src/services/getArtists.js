export const getArtists = (artistName, offset) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&limit=25&offset=${offset}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json()
    );
};

export const getOneArtist = (artistId) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json()
    );
};

export const getCoverArt = (releaseId) => {
  return fetch(`http://coverartarchive.org/release/${releaseId}front`)
    .then(res => res.json()
    );
};

export const getRecordingsList = (releaseId) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json()
    );
};

export const getLyrics = (artistName, songTitle) => {
  return fetch(`https://api.lyrics.ovh/v1/${artistName}/${songTitle}`)
    .then(res => res.json()
    );
};
