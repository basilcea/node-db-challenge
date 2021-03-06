const Project = require('../../projects/projectModel')
const Action = require('../../actions/actionModel')

const validateProjectId = async (req, res, next) => {
    const { id } = req.params;
    try {
      const data = await Project.get(id);
    
      if (!data) {
        return res.status(400).json({ message: "invalid user id" });
      }
      req.project = data
      next();
    } catch (err) {
      return res.status(500).json(err.toString());
    }
  };


const validateActionId = async (req, res, next) => {
    const { actionId } = req.params;
    try {
      const data = await Action.get(actionId);
      if (!data) {
        return res.status(400).json({ message: "invalid user id" });
      }
      next();
    } catch (err) {
      return res.status(500).json(err.toString());
    }
  };
  
  const validateProject = async (req, res, next) => {
  
    try {
      if (!req.body) {
        return res.status(400).json({ message: "missing Project data" });
      }
      if (!req.body.project_name) {
        return res.status(400).json({ message: "missing required project name field" });
      }
      if (!req.body.project_description) {
        return res.status(400).json({ message: "missing required project description field" });
      }
      next();
    } catch (err) {
      return res.status(500).json(err.toString());
    }
  };
  
  const validateAction = async (req, res, next) => {
    try {
      if (!req.body) {
        return res.status(400).json({ message: "missing post data" });
      }
      if (!req.body.action_description) {
        return res.status(400).json({ message: "missing required action description field" });
      }
  
      next();
    } catch (err) {
      return res.status(500).json(err.toString());
    }
  };
  
  module.exports = ({
    validateProjectId,
    validateActionId,
    validateProject,
    validateAction,
  });