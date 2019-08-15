exports.seed = function(knex) {
  return knex('users')
    .del()
    .then(function() {
      return knex('taste_profiles').insert([
        {
          user_id: 1,
          acousticness: '.0294',
          danceability: '.88',
          energy: '.87',
          instrumentalness: '.81',
          key: '11',
          liveness: '.094',
          loudness: '1.1',
          mode: '1',
          speechiness: '.02',
          tempo: '120',
          time_signature: '4',
          popularity: '55',
          valence: '.64',
        },
      ]);
    });
};
