var express = require('express');
var router = express.Router();
var productsModel = require('../modelos/productsModel');
const cloudinary = require('cloudinary').v2;

router.get('/clothes', async function (req, res, next) {

    var clothes = await productsModel.getClothes();
 
    clothes = clothes.map(clothes => {
       if (clothes.img_id) {
          const image = cloudinary.url(clothes.img_id, {
             width: 200,
             height: 200,
             crop: 'fill'
          });
          return {
             ...clothes,
             image
          }
       } else {
          return {
             ...clothes,
             image: ""
          }
       }
    })
 
    res.json(clothes)
 })

 router.get('/skates', async function (req, res, next) {

    var skates = await productsModel.getSkates();
 
    skates = skates.map(skate => {
       if (skate.img_id) {
          const image = cloudinary.url(skate.img_id, {
             width: 200,
             height: 200,
             crop: 'fill'
          });
          return {
             ...skate,
             image
          }
       } else {
          return {
             ...skate,
             image: ""
          }
       }
    })
 
    res.json(skates);
 })

 router.get('/trucksandwheels', async function (req, res, next) {

    var trucksAndWheels = await productsModel.getTrucksAndWheels();
 
      trucksAndWheels = trucksAndWheels.map(trucksAndWheels => {
       if (trucksAndWheels.img_id) {
          const image = cloudinary.url(trucksAndWheels.img_id, {
             width: 200,
             height: 200,
             crop: 'fill'
          });
          return {
             ...trucksAndWheels,
             image
          }
       } else {
          return {
             ...trucksAndWheels,
             image: ""
          }
       }
    })
 
    res.json(trucksAndWheels);
 })
 module.exports = router;