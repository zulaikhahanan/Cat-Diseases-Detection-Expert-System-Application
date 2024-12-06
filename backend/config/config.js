const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    envPort: process.env.PORT,
    dbURL: 'mongodb://localhost:27017/CatDiseaseDetectionSystem/Cat/Disease',
    sessionKey: process.env.SESSION_SECRET,
};