const ProjectsRoutes = require('./projects/projectRoutes')
const ActionsRoutes = require('./actions/actionsRoutes')
const express = require('express')
const {validateProjectId} = require('./data/helpers/validation')


const router = express.Router()

router.use('/:id/actions' , validateProjectId ,ActionsRoutes)
router.use('/',ProjectsRoutes)

module.exports = router