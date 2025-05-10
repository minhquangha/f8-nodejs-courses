const express = require('express');
const app =express();
const router = express.Router();

const newsController = require('../app/controllers/NewsController.js');

//newsController.index
router.use('/1',newsController.show);
router.use('/',newsController.index);

module.exports=router;