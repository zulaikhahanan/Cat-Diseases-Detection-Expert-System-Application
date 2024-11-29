const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    envPort: process.env.PORT,
    dbURL: 'mongodb+srv://aikhx:Zulaikha00@catdiseasesdetectionexp.vllco.mongodb.net/?retryWrites=true&w=majority&appName=CatDiseasesDetectionExpertSystem',
    sessionKey: process.env.SESSION_SECRET,
};