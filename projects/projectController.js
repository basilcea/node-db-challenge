const Projects = require('./projectModel')
const status = (res, data, status) => {
    return res.status(status).json(data);
  };

  const GetProject = async( req , res) => {
    const {id} = req.params
    try{
        const data = await Projects.get(id)
        status(res ,data, 200)
    }
    catch(err){
        status(res ,'Cannot Get Project', 500)
    }
  }


  const GetProjects = async( req , res) => {
    try{
        const data = await Projects.get()
     
            status(res ,data, 200)
    }
    catch(err){
        status(res ,'Cannot Get Projects', 500)
    }
  }

  const AddProject = async(req ,res) => {
      const {project_name , project_description } = req.body
      try{
          const data = await Projects.insert({project_name , project_description})
          status(res ,data , 200)
      }
      catch(err){
          status(res, err.toString(), 500)
      }
  }

  const UpdateProject = async(req, res) => {
      const {id} = req.params;
      const {project_name , project_description , project_completed} = req.body

      try{
        const data = await Projects.update(id ,{project_name , project_description, project_completed})
        status(res ,data , 200)
    }
    catch(err){
        status(res, 'Cannot Update Projects', 500)
    }
  }

  const DeleteProject = async(req, res) => {
      const {id} = req.params;
      try{
          await Projects.remove(id)
          status(res, "Project Deleted", 200)
      }
      catch(err){
          status(res , 'Cannot Delete Project' , 500)
      }
  }

  module.exports = ({
      GetProject,AddProject,UpdateProject,DeleteProject, GetProjects
  })