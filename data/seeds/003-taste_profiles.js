exports.seed = function(knex) {
  return knex('taste_profiles')
    .del()
    .then(function() {
      return knex('taste_profiles').insert([
        {
          user_id: 1,
          acousticness: 0.0294,
          danceability: 0.88,
          energy: 0.87,
          instrumentalness: 0.81,
          key: 11,
          liveness: 0.094,
          loudness: 1.1,
          mode: 1,
          speechiness: 0.02,
          tempo: 120,
          time_signature: 4,
          popularity: 55,
          valence: 0.64,
        },
      ]);
    });
};
