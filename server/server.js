const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routes/api');

// handle parsing request body
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === 'production') {
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, './index.html'));
  });
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
}

// API ROUTER logic handled in api.js
app.use('/api', apiRouter);

// catch-all route handler
app.use((req, res) =>
  res.status(404).send("Sorry! I could not find the page you're looking for!")
);

app.get('*', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, './index.html'))
);

// statically serve everything in the build folder on the route '/build'

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

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
