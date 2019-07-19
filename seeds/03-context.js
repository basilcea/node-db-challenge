
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Context').del()
    .then(function () {
      // Inserts seed entries
      return knex('Context').insert([
        {id: 1, action_id: 1 , name:"At Home"},
        {id: 2, action_id: 2, name:'At Office'},
        {id: 3, action_id:2, name:'At Computer'}
      ]);
    });
};
