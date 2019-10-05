const db = require('../data/dbConfig.js');
const mappers = require('../data/helpers/mappers')
module.exports = {
  getContext: async function(id){
    const value = await db('context').where('action_id',id)
    return  value
  },
  get: async function(id) {
    let query = db('actions');
    if (id) {
     const value = await this.getContext(id);
     const action = await db('actions').where('id', id).first()
      action.context = value 
        return mappers.actionToBody(action);
    }

  },
  insert: async function(action) {
   const id = await db('actions').insert(action)
      return await this.get(id);
  },
  update: async function(id, changes) {
    const idVal = await db('actions').where('id', id).update(changes);
      return await this.get(idVal)
  },
  remove: async function(id) {
   await db('actions')
      .where('id', id)
      .del()
  },
}
