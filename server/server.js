const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routes/api');
require('dotenv').config()
const cloudinary = require('cloudinary')
const formData = require('express-form-data')

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
});

app.use(formData.parse());

// handle parsing request body
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.get('/', (req, res) => {
    return res
      .status(200)
      .sendFile(path.join(__dirname, '../client/public/index.html'));
  });
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
}

// post for image uploads to cloudinary
app.post('/image-upload', (req, res) => {
  const values = Object.values(req.files)
  const promises = values.map(image => cloudinary.uploader.upload(image.path))
    Promise
      .all(promises)
      .then(data => res.json(data))
});

/* API ROUTER logic handled in api.js
invludes all listing CRUD functionality 
as well as pet and photo storage - user 
info for signup/login is a separate router */ 
app.use('/api', apiRouter);

// serve index
app.get('/', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/public/index.html'))
);

//catch-all route handler
app.use((req, res) =>
  res.status(404).send("Sorry! I could not find the page you're looking for!")
);

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

