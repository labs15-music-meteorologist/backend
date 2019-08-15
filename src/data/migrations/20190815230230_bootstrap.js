exports.up = function(knex) {
  return knex.schema
    .createTable('users', users => {
      users.increments();
      users
        .string('email', 255)
        .notNullable()
        .unique();
      users
        .varchar('spotify_user_id')
        .notNullable()
        .unique();
      users
        .varchar('user_spotify_api_key')
        .notNullable()
        .unique();
      users
        .varchar('date_of_birth')
        .notNullable()
        .unique();
      users
        .varchar('spotify_product_type')
        .notNullable()
        .unique();
      users.varchar('display_name', 128).notNullable();
      users.varchar('country', 255).notNullable();
      users.varchar('profile_image_url', 255);
    })

    .createTable('taste_profiles', taste => {
      taste.increments();
      taste
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      taste.float('acousticness').notNullable();
      taste.float('danceability').notNullable();
      taste.float('energy').notNullable();
      taste.float('instrumentalness').notNullable();
      taste.integer('key').notNullable();
      taste.float('liveness').notNullable();
      taste.float('loudness').notNullable();
      taste.integer('mode').notNullable();
      taste.float('speechiness').notNullable();
      taste.float('tempo').notNullable();
      taste.integer('time_signature').notNullable();
      taste.integer('popularity').notNullable();
      taste.float('valence').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('taste_profiles')
    .dropTableIfExists('users');
};
