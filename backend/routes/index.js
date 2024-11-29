/*********************** Index Page Route******************************/

const express = require('express');
const router = express.Router();

//Get the Index Page
router.get('/', function(req, res, next) {
    res.render('index');
  });



module.exports = router;
/***********************************************************************/