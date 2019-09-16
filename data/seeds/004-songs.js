exports.seed = function(knex) {
  return knex('songs')
    .del()
    .then(function() {
      return knex('songs').insert([
        {
          spotify_song_id: '5d4zl1SVfjPykq0yfsdil6',
          acousticness: 0.949,
          danceability: 0.367,
          energy: 0.0786,
          instrumentalness: 0,
          key: 0,
          liveness: 0.0729,
          loudness: -21.294,
          mode: 1,
          speechiness: 0.0734,
          tempo: 74.528,
          time_signature: 4,
          valence: 0.358,
        },
        {
          spotify_song_id: '32bZwIZbRYe4ImC7PJ8s2A',
          acousticness: 0.882,
          danceability: 0.158,
          energy: 0.0893,
          instrumentalness: 0.132,
          key: 0,
          liveness: 0.323,
          loudness: -21.894,
          mode: 1,
          speechiness: 0.0639,
          tempo: 74.959,
          time_signature: 4,
          valence: 0.0732,
        },
      ]);
    });
};
