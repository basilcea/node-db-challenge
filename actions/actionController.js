const Actions = require('./actionModel');
const status = (res, data, status) => {
    return res.status(status).json(data);
  };

  const GetAction = async( req , res) => {
    const {actionId} = req.params
    try{
        const data = await Actions.get(actionId)
        status(res ,data, 200)
    }
    catch(err){
        status(res ,'Cannot Get Actions', 500)
    }
  }

  const AddAction = async(req ,res) => {
    const {action_description, notes} = req.body
    try{
        const data = await Actions.insert({action_description,notes, project_id:req.project.id})
        status(res ,data , 200)
    }
    catch(err){
        status(res, err.toString(), 500)
    }
}

const UpdateAction = async(req, res) => {
    const {actionId} = req.params;
    const {description , notes} = req.body

    try{
      const data = await Actions.update(actionId ,{description , notes})
      status(res ,data , 200)
  }
  catch(err){
      status(res, 'Cannot Update Actions', 500)
  }
}

const DeleteAction = async(req, res) => {
    const {actionId} = req.params;
    try{
        await Actions.remove(actionId)
        status(res, "Action Deleted", 200)
    }
    catch(err){
        status(res , 'Cannot Delete Action' , 500)
    }
}

module.exports = ({
    GetAction, AddAction ,UpdateAction,DeleteAction
})