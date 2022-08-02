// Import Models
const Peak = require('../Models/peakSchema.js')
// const seed = require("../Models/peaksSeed.js");

// Initialize Router Object
const express = require('express');
const router = express.Router()

// Multer
// const multer = require('multer');
// const path = require('path');
// const fs = require('file-system');
// const ObjectId = require('mongodb').ObjectId;

// Multer - SET STORAGE
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'images')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })
   
//   const upload = multer({ storage: storage })
  // Multer - SET STORAGE

// Multer

const fourteener = [
    {Peak: 'Mt. Elbert', Elevation: '14,438', Range: 'Sawatch Range'},
    {Peak: 'Mt. Massive', Elevation: '14,427', Range: 'Sawatch Range'},
    {Peak: 'Mt. Harvard', Elevation: '14,424', Range: 'Sawatch Range'},
    {Peak: 'Blanca Peak', Elevation: '14,350', Range: 'Sangre de Cristo'},
    {Peak: 'La Plata Peak', Elevation: '14,344', Range: 'Sawatch Range'},
    {Peak: 'Uncompahgre Peak', Elevation: '14,318', Range: 'San Juan Mountains'},
    {Peak: 'Crestone Peak', Elevation: '14,299', Range: 'San de Cristo'},
    {Peak: 'Mt. Lincoln', Elevation: '14,293', Range: 'Mosquito Range'},
    {Peak: 'Grays Peak', Elevation: '14,275', Range: 'Front Range'},
    {Peak: 'Castle Peak', Elevation: '14,274', Range: 'Elk Mountains'},
    {Peak: 'Quandary Peak', Elevation: '14,272', Range: 'Tenmile Range'},
    {Peak: 'Torreys Peak', Elevation: '14,272', Range: 'Front Range'},
    {Peak: 'Mt.Antero', Elevation: '14,271', Range: 'Sawatch Range'},
    {Peak: 'Mt. Evans', Elevation: '14,268', Range: 'Front Range'},
    {Peak: 'Longs Peak', Elevation: '14,259', Range: 'Front Range'},
    {Peak: 'Mt. Wilson', Elevation: '14,256', Range: 'San Juan Mountains'},
    {Peak: 'Mt. Cameron', Elevation: '14,248', Range: 'Mosquito Range'},
    {Peak: 'Mt. Shavano', Elevation: '14,230', Range: 'Sawatch Range'},
    {Peak: 'Mt. Belford', Elevation: '14,202', Range: 'Sawatch Range'},
    {Peak: 'Mt. Princeton', Elevation: '14,200', Range: 'Sawatch Range'},
    {Peak: 'Mt. Yale', Elevation: '14,200', Range: 'Sawatch Range'},
    {Peak: 'Crestone Needle', Elevation: '14,196', Range: 'Sangre de Cristo'},
    {Peak: 'Mt. Bross', Elevation: '14,178', Range: 'Mosquito Range'},
    {Peak: 'El Diente Peak', Elevation: '14,175', Range: 'San Juan Mountains'},
    {Peak: 'Kit Carson Peak', Elevation: '14,167', Range: 'Sangre de Cristo'},
    {Peak: 'Maroon Peak', Elevation: '14,163', Range: 'Elk Mountains'},
    {Peak: 'Mt. Oxford', Elevation: '14,158', Range: 'Sawatch Range'},
    {Peak: 'Tabeguache Peak', Elevation: '14,158', Range: 'Sawatch Range'},
    {Peak: 'Mt. Sneffels', Elevation: '14,155', Range: 'San Juan Mountains'},
    {Peak: 'Mt. Democrat', Elevation: '14,154', Range: 'Mosquito Range'},
    {Peak: 'Capitol Peak', Elevation: '14,138', Range: 'Elk Mountains'},
    {Peak: 'Pikes Peak', Elevation: '14,109', Range: 'Front Range'},
    {Peak: 'Snowmass Mountain', Elevation: '14,105', Range: 'Elk Mountains'},
    {Peak: 'Windom Peak', Elevation: '14,089', Range: 'San Juan Mountains'},
    {Peak: 'Mt. Eolus', Elevation: '14,087', Range: 'San Juan Mountains'},
    {Peak: 'Challenger Point', Elevation: '14,086', Range: 'Sangre de Cristo'},
    {Peak: 'Mt. Columbia', Elevation: '14,075', Range: 'Sawatch Range'},
    {Peak: 'Missouri Mountain', Elevation: '14,071', Range: 'Sawatch Range'},
    {Peak: 'Humboldt Peak', Elevation: '14,068', Range: 'Sangre de Cristo'},
    {Peak: 'Mt. Bierstadt', Elevation: '14,066', Range: 'Front Range'},
    {Peak: 'Sunlight Peak', Elevation: '14,061', Range: 'San Juan Mountains'},
    {Peak: 'Handies Peak', Elevation: '14,058', Range: 'San Juan Mountains'},
    {Peak: 'Ellingwood Point', Elevation: '14,057', Range: 'Sangre de Cristo'},
    {Peak: 'Mt. Lindsey', Elevation: '14,055', Range: 'Sangre de Cristo'},
    {Peak: 'Culebra Peak', Elevation: '14,053', Range: 'Sangre de Cristo'},
    {Peak: 'Mt. Sherman', Elevation: '14,043', Range: 'Mosquito Range'},
    {Peak: 'North Eolus', Elevation: '14,042', Range: 'San Juan Mountains'},
    {Peak: 'Little Bear Peak', Elevation: '14,041', Range: 'Sangre de Cristo'},
    {Peak: 'Redcloud Peak', Elevation: '14,037', Range: 'San Juan Mountains'},
    {Peak: 'Conundrum Peak', Elevation: '14,037', Range: 'Elk Mountains'},
    {Peak: 'Pyramid Peak', Elevation: '14,029', Range: 'Elk Mountains'},
    {Peak: 'San Luis Peak', Elevation: '14,023', Range: 'San Juan Mountains'},
    {Peak: 'North Maroon Peak', Elevation: '14,022', Range: 'Elk Mountains'},
    {Peak: 'Wetterhorn Peak', Elevation: '14,021', Range: 'San Juan Mountains'},
    {Peak: 'Wilson Peak', Elevation: '14,021', Range: 'San Juan Mountains'},
    {Peak: 'Mt. of the Holy Cross', Elevation: '14,007', Range: 'Sawatch Range'},
    {Peak: 'Huron Peak', Elevation: '14,006', Range: 'Sawatch Range'},
    {Peak: 'Sunshine Peak', Elevation: '14,004', Range: 'San Juan Mountains'},


]

// INDEX
router.get('/', (req, res) => {
    res.render('welcomePage.ejs')
})

router.get('/user', (req, res) => {
    Peak.find({}, (err, allPeaks) => {
        res.render('userProfile.ejs', {allPeaks, fourteener});
    })
})
router.get('/user/<% peak._id %>', (req, res) => {
    Peak.find({}, (err, Peak) => {
        res.render('showPeak.ejs', )
    })
})
// Multer
// router.get('/photos', (req, res) => {
//     Peak.collection('myCollection').find().toArray((err, result) => {
//         const imgArray = result.map(element => element._id);
//         console.log(imgArray);
//         if (err) return console.log(err)
//         res.send(imgArray)
 
//     })
// });
// router.get('/photo/:id', (req, res) => {
//     var filename = req.params.id;
//     Peak.collection('myCollection').findOne({ '_id': ObjectId(filename) }, (err, result) => {
//         if (err) return console.log(err)
//         res.contentType('image/jpeg');
//         res.send(result.image.buffer)
//     })
// })
// Multer

// NEW
router.get('/user/new', (req, res) => {
    res.render('newPeak.ejs', {fourteener})
})

// DELETE
router.delete('/user/:id', (req, res) => {
    Peak.findByIdAndDelete(req.params.id, (error, deletePeak) => {
        res.redirect('/user');
    })
})

// UPDATE
router.put('/user/:id', (req, res) => {
    Peak.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (error, updatedPeak) => {
            res.redirect('/user');  
        }
    )
})


  // CREATE
  router.post('/user', (req, res) => {
    Peak.create(req.body, (err, newPeak) => {
        res.redirect('/user')
    })
})
// Multer
// router.post('/user', upload.array('image', 12), (req, res, next) => {
//     const files = req.files
//     if (!files) {
//       const error = new Error('Please choose files')
//       error.httpStatusCode = 400
//       return next(error)
//     }
//       res.send(files)
//   })
//   router.post('/user', upload.single('image'), (req, res) => {
//     let img = fs.readFileSync(req.file.path);
//     let encode_image = img.toString('base64');
    // Define a JSONobject for the image attributes for saving to database
 
//     let finalImg = {
//         contentType: req.file.mimetype,
//         image: Buffer.from(encode_image, 'base64')
//     };
//      Peak.collection('myCollection').insertOne(finalImg, (err, result) => {
//         console.log(result)
//         if (err) return console.log(err)
//         console.log('saved to database')
//         res.redirect('/user/:id')
//     })
// })
 // Multer


 // EDIT
router.get('/user/:id/edit', (req, res) => {
    Peak.findById(req.params.id, (error, foundPeak) => {
        res.render('editPeak.ejs', {foundPeak});
    })
})

//  SHOW
 router.get('/user/:id', (req, res) => {
    Peak.findById(req.params.id, (error, foundPeak) => {
        res.render('showPeak.ejs', {foundPeak})
    })
})

















module.exports = router