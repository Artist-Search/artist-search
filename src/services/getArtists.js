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

export const getOneArtist = (artistId, offset) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&limit=25&offset=${offset}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json()
    )
    .then(response => ({
      offset: response['release-offset'],
      count: response['release-count'],
      releases: response.releases.map(release => ({
        releaseId: release.id,
        title: release.title,
        coverArt: release['cover-art-archive'].artwork
      }))
    }));
};

export const getCoverArt = (releaseId) => {
  return fetch(`http://coverartarchive.org/release/${releaseId}/front`)
    .then(res => res.json()
    );
};

export const getRecordingsList = (albumid) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${albumid}&fmt=json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json()
    );
};

export const getLyrics = (name, title) => {
  return fetch(`https://api.lyrics.ovh/v1/${name}/${title}`)
    .then(res => res.json()
    );
};
