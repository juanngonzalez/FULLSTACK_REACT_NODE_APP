var express = require('express');
var router = express.Router();
var productsModel = require('../modelos/productsModel');
const cloudinary = require('cloudinary').v2;
const nodemailer = require('nodemailer')

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

router.post('/contact', async function (req, res, next) {

   const mail = {
      to: 'juan.g.gonzalez13400@gmail.com',
      subject: 'Contacto web',
      html: `${req.body.name} se contacto a traves de la web con el siguiente correo: ${req.body.mail} <br>
     Ademas, hizo el siguiente comentario: ${req.body.message} <br>
     su telefono es: ${req.body.phone}`
   }

   const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
         user: process.env.SMTP_USER,
         pass: process.env.SMTP_PASS
      }

   })

   await transport.sendMail(mail)

   res.status(201).json({
      error: false,
      message: 'mensaje enviado'
   })

})

module.exports = router;