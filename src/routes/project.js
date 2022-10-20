
const router = require('express').Router();
const postProject= require('../controller/postProject');
const getProject = require('../controller/getProjects');

router.post('/postProject',postProject);
router.get('/getProject',getProject);

module.exports = router;