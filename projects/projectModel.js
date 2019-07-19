const db = require('../data/dbConfig');

module.exports = {
  get,
  insert,
  update,
  remove,
  getProjectActions,
};

async function getProjectActions(projectId) {
  const value = await db('Actions').where('project_id', projectId)
  value.map(action => mappers.actionToBody(action));
}

async function get(id) {
  let query = db('Projects');

  if (id) {
    const project = await query.where('id', id).first();
   project.actions = await getProjectActions(id)
    return project
  }
return query
  // return query.then(Projects => {
  //   return Projects.map(project => mappers.projectToBody(project));
  // });
}

function insert(project) {
  return db('Projects')
    .insert(project)
    .then(([id]) => this.get(id));
}

function update(id, changes) {
  return db('Projects')
    .where('id', id)
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null));
}

function remove(id) {
  return db('Projects')
    .where('id', id)
    .del();
}


