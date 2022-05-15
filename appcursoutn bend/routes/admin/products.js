var express = require('express');
var router = express.Router();
var productsModel = require('../../modelos/productsModel')
var util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload)

/* GET home page. */
router.get('/', async function (req, res, next) {



   res.render('admin/products', {
      layout: 'admin/layout',
      usuario: req.session.nombre,
      
   });
});



module.exports = router;