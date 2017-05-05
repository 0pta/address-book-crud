exports.seed = function(knex) {
  return knex('addresses').del()
    .then(() => {
      return knex('addresses').insert([{
        id: 1,
        line_1: '1234 E. Streety',
        line_2: 'Apt 8',
        city: 'Seattle',
        zip: 98765,
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: 2,
        line_1: '1337 Leet St.',
        line_2: 'Apt 34',
        city: 'Renton',
        zip: 67890,
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: 3,
        line_1: '5555 Five St.',
        line_2: 'Apt #5',
        city: 'Tacoma',
        zip: 56789,
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('addresses_id_seq', (SELECT MAX(id) FROM addresses));"
      );
    });
};
