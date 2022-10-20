
const router = require('express').Router();
const postProject = require('../controller/postProject');
const getProject = require('../controller/getProjects');
const deleteProject = require('../controller/deleteProject');
const updateProject = require('../controller/updateProject');
const signUp = require('../controller/admin/signUp');
const login =  require('../controller/admin/login');

router.post('/login',login);

router.post('/signUp', signUp);
router.post('/postProject', postProject);
router.get('/getProject', getProject);
router.put('/updateProject/:id', updateProject);
router.delete('/deleteProject/:id', deleteProject);

module.exports = router;