
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {id: 1, project_name: 'BugBites', project_description:'Classified P7' , project_completed:false},
        {id: 2, project_name: 'Devka' , project_description:'Classified P6 ', project_completed:false},
        {id: 3, project_name: 'Portfolio', project_description:'A portfolio page', project_completed:true}
      ]);
    });
};
