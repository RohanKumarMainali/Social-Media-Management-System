
const router = require('express').Router();
const postProject= require('../controller/postProject');

router.post('/postProject',postProject)

module.exports = router;