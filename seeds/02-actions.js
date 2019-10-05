
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('Actions').insert([
        {id: 1, action_description: 'create landing page' , project_id:3 , notes:'Simple minimalistic landing page with envelope design' , action_completed:true},
        {id: 2, action_description: 'create about us page', project_id:3, notes:'Responsive animated page using typed.js', action_completed:true},
        {id: 3, action_description: 'create projects page', project_id:3, notes:'Responsive animated page using flip cards',action_completed:false}
      ]);
    });
};
