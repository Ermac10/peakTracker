// DEPENDENCIES
require('dotenv').config()
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const controllerRouter = require('./Controllers/controller')
const methodOverride = require("method-override");
const mongoose = require('mongoose')
const morgan = require('morgan');
const peakSchema = require('./Models/peakSchema');
const MongoURL = process.env.MONGO_URL;
const app = express();
const PORT = 4000;


// CONFIGURATION
mongoose.connect(MongoURL);
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
})

app.use(morgan('dev'))
app.use(expressLayouts);
app.use(express.urlencoded({ extended: false}));
app.use(express.static('Public'));
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  console.log("middleware is running...");
  next();
})
app.set('view engine', 'ejs');
app.use('/', controllerRouter)


app.listen(PORT, () => {
    console.log('Express is listening')
})