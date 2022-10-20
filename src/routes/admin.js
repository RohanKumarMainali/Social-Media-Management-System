
const router = require('express').Router();
const login =  require('../controller/admin/login');

router.post('/login',login);


module.exports = router;