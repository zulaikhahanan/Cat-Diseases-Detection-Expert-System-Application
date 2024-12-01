/*********************** Disease Diagnose Route******************************/

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Cat = require('../models/Cat');
const { exec } = require('child_process');

//Get the Detect Diagnosis Page
router.get('/Result', function(req, res, next) {
    res.render('symptom description');
  });

// POST route to submit cat diseasedata
router.post('/diagnose', async (req, res) => {
  const { name, symptoms, description, treatment } = req.body;

  const newCat = new Cat({ name, symptoms, description, treatment});
  await newCat.save();

  // Run the CLIPS expert system
  exec('clips -f backend/clips/cat_disease.clp', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send('Error running CLIPS');
    }

    // Fetch diagnosis from MongoDB
    Cat.findOne({ name }, (err, cat) => {
      if (err || !cat) {
        return res.status(404).send('Disease not found');
      }
      res.json({ name: cat.name, diagnosis: cat.diagnosis });
    });
  });
});

//Export Module
module.exports = router;
/***********************************************************************/