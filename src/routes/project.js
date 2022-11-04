
const router = require('express').Router();
const postProject= require('../controller/postProject');
const getProject = require('../controller/getProjects');
const deleteProject = require('../controller/deleteProject');
const updateProject = require('../controller/updateProject');
const signUp = require('../controller/admin/signUp');
const login =  require('../controller/admin/login');
const calanderPost = require('../controller/calendar/post')
const getCalendar = require('../controller/calendar/get')
const updateCalender = require('../controller/calendar/update')
const deleteCalender = require('../controller/calendar/delete')
const postInvoice = require('../controller/invoice/postInvoice');
const updateInvoice = require('../controller/invoice/updateInvoice');
const getInvoice = require('../controller/invoice/getInvoice');
const deleteInvoice = require('../controller/invoice/deleteInvoice');

router.post('/login',login);
router.post('/signup',signUp);

router.post('/postProject',postProject);
router.post('/calanderPost',calanderPost);
router.post('/postInvoice',postInvoice);
router.get('/getProject',getProject);
router.get('/getCalendar',getCalendar);
router.get('/getInvoice',getInvoice);
router.put('/updateProject/:id',updateProject);
router.put('/updateCalender/:id',updateCalender);
router.put('/updateInvoice/:id',updateInvoice)
router.delete('/deleteProject/:id',deleteProject);
router.delete('/deleteCalender/:id',deleteCalender);
router.delete('/deleteInvoice/:id',deleteInvoice);


module.exports = router;