// DEPENDENCIES
require('dotenv').config()

// Sessions
// const session = require("express-session")
// const bcrypt = require("bcrypt")
// const hashedString = bcrypt.hashSync("yourStringHere", bcrypt.genSaltSync(10))
// Sessions

// Multer
const multer = require('multer');
const path = require('path');
// Multer

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const controllerRouter = require('./Controllers/controller')
const methodOverride = require("method-override");
const mongoose = require('mongoose')
const morgan = require('morgan');
const peakSchema = require('./Models/peakSchema');
const MongoURL = process.env.MONGO_URL;
const app = express();
const PORT = process.env.PORT || 4000;


// CONFIGURATION
mongoose.connect(MongoURL);
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
})

app.use(morgan('dev'))

// Sessions
// app.use(
//     session({
//       secret: process.env.SECRET,
//       resave: false,
//       saveUninitialized: false,
//     })
//   )
// Sessions

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




// Sessions

//   Routes / Controllers
//   app.get("/user/login", (req, res) => {
//     req.session.anyProperty = "any value"
//     res.send("This is the route that sets the value of req.session.anyProperty")
//   })

//   app.get("/retrieve", (req, res) => {
//     if (req.session.anyProperty === "specific value") {
//       //test to see if that value exists
//       //do something if it's a match
//       res.send("it matches! cool")
//     } else {
//       //do something else if it's not
//       res.send("nope, not a match")
//     }
//   })

//   app.get("/update", (req, res) => {
//     req.session.anyProperty = "specific value"
//     res.send("This is the route that updates req.session.anyProperty")
//   })

//   app.get('/destroy', (req, res) => {
//     req.session.destroy((error) => {
//         if (error) {
//             res.send(error);
//         } else {
//             res.send({
//                 success: true
//             });
//         }
//     });
// });

// app.get("/hashed", (req, res) => {
//     const hashedString = bcrypt.hashSync("example", bcrypt.genSaltSync(10))
//     res.send(hashedString)
//   })

//   app.get("/compare", (req, res) => {
//     const hashedString = bcrypt.hashSync("example", bcrypt.genSaltSync(10))
//     const isSameString = bcrypt.compareSync("yourGuessHere", hashedString)
//     res.send(isSameString)
//   })

app.listen(PORT, () => {
    console.log('Express is listening')
})