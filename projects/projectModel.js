const db = require('../data/dbConfig');
const mappers = require('../data/helpers/mappers')
module.exports = {
  get,
  insert,
  update,
  remove,
  getProjectActions,
};

async function getProjectActions(projectId) {
  const value = await db('Actions').where('project_id', projectId)
  return value
}

async function get(id) {
  let query = db('Projects');

  if (id) {
    const project = await query.where('id', id).first();
   project.actions = await getProjectActions(id)
    return mappers.projectToBody(project)
  }
return query.map(project => mappers.projectToBody(project))
}

async function insert(project) {
  await db('Projects').insert(project)
  return get()

}

async function update(id, changes) {
  await db('Projects').where('id', id).update(changes)
  return get(id)

}

function remove(id) {
  return db('Projects')
    .where('id', id)
    .del();
}


