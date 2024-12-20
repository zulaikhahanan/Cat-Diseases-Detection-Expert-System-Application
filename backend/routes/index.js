/*********************** Index Page Route******************************/

const express = require('express');
const router = express.Router();

//Get the Index Page
router.get('/', function(req, res, next) {
    res.render('index');
  });

//Get the Detect Diseases Page
router.get('/Symptom Detector', function(req, res) {
    res.render('symptom detector');
  });

module.exports = router;
/***********************************************************************/