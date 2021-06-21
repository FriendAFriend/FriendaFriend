const express = require('express'); 
const app = express();
const path = require('path'); 
const apiRouter = require('./routes/api');
// const mongoose = require('mongoose'); 
const cors = require('cors'); 

// handle parsing request body
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

// API ROUTER logic handled in api.js
app.use('/api', apiRouter);

// static router from the build folder
app.use('/build', express.static(path.join(__dirname, '../build')));

// base route serves index.html
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// catch-all route handler
app.use((req, res) => res.status(404).send('Sorry! I could not find the page you\'re looking for!')); 

// global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
}); 