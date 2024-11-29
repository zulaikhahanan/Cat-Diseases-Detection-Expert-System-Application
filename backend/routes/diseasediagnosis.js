/*********************** Disease Diagnose Route******************************/

const express = require('express');
const router = express.Router();

//Get the Detect Diagnosis Page
router.get('/Result', function(req, res, next) {
    res.render('symptom description');
  });

module.exports = router;
/***********************************************************************/