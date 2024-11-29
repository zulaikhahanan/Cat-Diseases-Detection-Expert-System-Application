/*********************** Index Page Route******************************/

const express = require('express');
const router = express.Router();

//Get the Detect Diseases Page
router.get('/Symptom Detector', function(req, res, next) {
    res.render('symptom detector');
  });

module.exports = router;
/***********************************************************************/