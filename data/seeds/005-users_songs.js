exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_songs')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users_songs').insert([
        { user_id: 1, song_id: 1, is_liked: 1, liked_timestamp: '2019-03-01' },
      ]);
    });
};
