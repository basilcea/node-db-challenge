
exports.up = function(knex) {
  return knex.schema
  .createTable('Projects', table =>{
      table.increments();
      table.string('project_name', 128)
      .notNullable()
      .unique();
      table.text('project_description')
      .notNullable();
      table.boolean('project_completed')
    .createTable('Actions', table => {
        table.increments();
        table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        table.text('action_description')
        .notNullable();
        table.text('notes');
        table.boolean('action_completed')
    })
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('Actions')
    .dropTableIfExists('Projects')
  
};
