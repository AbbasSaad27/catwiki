//dependencies
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const path = require('path');

//internal imports
const { notFoundHandler, defaultErrorHandler } = require('./middlewares/errorHandlers');
const breedsRouter = require('./routers/breedsRouter');

//initialise the app
const app = express();

//initialise cors
app.use(cors({ origin: true, credentials: true }));

//express body parser
app.use(express.json());

//set static folder
if (process.env.NODE_ENV === 'production') {
   app.use(express.static('client/build'));
} else {
   app.use(express.static(path.join(__dirname, 'public')));
}

//routers
app.use('/api/breeds/', breedsRouter);

app.get('/', (req, res, next) => {
   res.status(200).json({ status: 'success', message: `This is root of ${process.env.APP_NAME}` });
});

app.all('*', notFoundHandler);

app.use(defaultErrorHandler);

//export the app
module.exports = app;
