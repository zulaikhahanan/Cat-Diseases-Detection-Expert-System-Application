/*********************** Disease Checklist Route******************************/

const express = require('express');
const router = express.Router();

//Get the Detect Diseases Page
router.get('/Checklist', function(req, res, next) {
    res.render('symptom detector');
  });

module.exports = router;
/***********************************************************************/