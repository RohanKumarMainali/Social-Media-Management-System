
const router = require('express').Router();
const postProject= require('../controller/postProject');
const getProject = require('../controller/getProjects');
const deleteProject = require('../controller/deleteProject');
const updateProject = require('../controller/updateProject');
const updateprojectpackage = require('../controller/updateprojectpackage');
const signUp = require('../controller/admin/signUp');
const login =  require('../controller/admin/login');
const calanderPost = require('../controller/calendar/post')
const getCalendar = require('../controller/calendar/get')
const updateCalender = require('../controller/calendar/update')
const deleteCalender = require('../controller/calendar/delete')
const postInvoice = require('../controller/invoice/postInvoice');
const updateInvoice = require('../controller/invoice/updateInvoice');
const getInvoice = require('../controller/invoice/getInvoice');
const getInvoiceItem = require('../controller/invoiceItem/get');
const getSingleInvoice = require('../controller/invoice/singleInvoice');
const deleteInvoice = require('../controller/invoice/deleteInvoice');
const postInvoiceIteam = require('../controller/invoiceItem/post')
const packagePost = require("../controller/packages/post")
const packageGet = require("../controller/packages/get")
const packageGetSingle = require("../controller/packages/getSingle")
const invoiceItemUpdate = require("../controller/invoiceItem/update")
const packageUpdate = require("../controller/packages/update")

router.post('/login',login);
router.post('/signup',signUp);

router.post('/postProject',postProject);
router.post('/postInvoiceIteam',postInvoiceIteam);
router.post('/calanderPost',calanderPost);
router.post('/packagePost',packagePost);
router.post('/postInvoice',postInvoice);
router.get('/getProject',getProject);
router.get('/getCalendar',getCalendar);
router.get('/getInvoice',getInvoice);
router.get('/packageGet',packageGet);
router.post('/packageGetSingle',packageGetSingle);
router.get('/getSingleInvoice/:id',getSingleInvoice);
router.get('/getInvoiceItem/:id',getInvoiceItem);
router.put('/updateProject/:id',updateProject);
router.put('/updateprojectpackage/:id',updateprojectpackage);
router.put('/updateCalender/:id',updateCalender);
router.put('/updateCalender/:id',updateCalender);
router.put('/updateInvoice/:id',updateInvoice)
router.put('/packageUpdate/:id',packageUpdate)
router.delete('/deleteProject/:id',deleteProject);
router.delete('/deleteCalender/:id',deleteCalender);
router.put('/invoiceItemUpdate/:id',invoiceItemUpdate);


module.exports = router;