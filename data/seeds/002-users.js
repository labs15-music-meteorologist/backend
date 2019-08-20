exports.seed = function(knex) {
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        {
          email: 'sascha.majewsky@pm.me',
          spotify_user_id: 'jgdpq16w0y44by33k1dqo189v',
          user_spotify_api_key:
            'BQCYlQlNNQRvqFCeNL_XyPzElQoTf66R3lyaHnEHkshqk92oDcGWLrlGDFyGMoCVNg_t6oFpnbE8ELScwSaGuQGxAwl_DucbDqp7xUrR4W2eDdqv3Ze1Ph7r0g5ITOhno0v9ZSo958LhiEyCi3-5h5jiZQrlg9bgSfDaoj7yaGSnZsyXNM9mJjfBkzXhOfC5Fr45ohiS64Hi_p_pgw',
          display_name: 'Sascha',
          date_of_birth: '1993-08-09',
          spotify_product_type: 'premium',
          display_name: 'Sascha',
          country: 'DE',
        },
      ]);
    });
};
