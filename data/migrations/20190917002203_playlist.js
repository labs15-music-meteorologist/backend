exports.up = function(knex) {
  return knex.schema
    .createTable('songs', tbl => {
      tbl.increments();
      tbl
        .varchar('spotify_song_id')
        .unique()
        .notNullable();
      tbl.float('acousticness').notNullable();
      tbl.float('danceability').notNullable();
      tbl.float('energy').notNullable();
      tbl.float('instrumentalness').notNullable();
      tbl.integer('key').notNullable();
      tbl.float('liveness').notNullable();
      tbl.float('loudness').notNullable();
      tbl.integer('mode').notNullable();
      tbl.float('speechiness').notNullable();
      tbl.float('tempo').notNullable();
      tbl.integer('time_signature').notNullable();
      tbl.float('valence').notNullable();
    })

    .alterTable('users', tbl => {
      tbl.varchar('spotify_playlist_id');
    })

    .createTable('users_songs', tbl => {
      tbl.increments();

      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

      tbl
        .integer('song_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('songs')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

      tbl
        .integer('is_liked')
        .unsigned()
        .notNullable();

      tbl.varchar('liked_timestamp').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users_songs')
    .dropTableIfExists('songs')
    .dropTableIfExists('taste_profiles')
    .dropTableIfExists('users');
};
