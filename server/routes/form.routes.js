const express = require('express');
const  {getList, createList} = require('../controller/formController.js');

const router = express.Router();

router.get('/',getList);
router.post('/',createList);

module.exports = router;
