var express = require('express');
var router = express.Router();
var productsModel = require('../../../modelos/productsModel')
var util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload)
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function (req, res, next) {

   var skates = await productsModel.getSkates();

   skates = skates.map(skate => {
      if (skate.img_id) {
         const image = cloudinary.image(skate.img_id, {
            width: 100,
            height: 100,
            //crop: 'fill'
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

   res.render('admin/products/skates/skates_list', {
      layout: 'admin/layout',
      usuario: req.session.nombre,
      skates
      
   });
})

router.get('/add_skate', (req, res, next) => {
   res.render('admin/products/skates/add_skate', {
      layout: 'admin/layout',
      usuario: req.session.nombre
   })
})


router.post('/add_skate', async (req, res, next) => {
   try {
      var img_id = "";
      if (req.files && Object.keys(req.files).length > 0) {
         image = req.files.image;
         img_id = (await uploader(image.tempFilePath)).public_id;
      }

      if (req.body.name != "" && req.body.price > 0 && req.body.stock > 0) {
         await productsModel.insertSkate({
            ...req.body,
            img_id
         });
         res.redirect('/admin/products/skates/skates_list')
      } else {
         res.render('admin/products/skates/add_skate', {
            usuario: req.session.nombre,
            layout: 'admin/layout',
            error: true,
            message: "Todos los campos son requeridos"
         })
      }
   } catch (error) {
      console.log(error)
      res.render('admin/products/skates/add_skate', {
         usuario: req.session.nombre,
         layout: 'admin/layout',
         error: true,
         message: "No se cargo el producto"
      })
   }
});

router.get('/delete/:id_product', async (req, res, next) => {
   var id = req.params.id_product;

   let skate = await productsModel.getSkateById(id)
   if(productsModel.img_id){
      await (destroy(skate.img_id))
   }
   await productsModel.deleteSkate(id) 
   res.redirect('/admin/products/skates/skates_list')
   
})





router.get('/update/:id_product', async (req, res, next) => {
   var id = req.params.id_product;
   var skate = await productsModel.getSkateById(id);
   res.render('admin/products/skates/update', {
      layout: 'admin/layout',
      usuario: req.session.nombre,
      skate
   })
})

router.post('/update', async (req, res, next) => {
   try {
      
      let img_id = req.body.img_origin;
      let delete_old_image = false;
      if (req.body.img_delete === "1") {
         img_id = null;
         delete_old_image = true;
      } else {
         if (req.files && Object.keys(req.files).length > 0) {
            image = req.files.image;
            img_id = (await uploader(image.tempFilePath)).public_id;
            delete_old_image = true;
         }
      }
      if (delete_old_image && req.body.img_origin) {
         await (destroy(req.body.img_origin));
      }
      var obj = {
         name: req.body.name,
         price: req.body.price,
         stock: req.body.stock,
         img_id
      }
      await productsModel.updateSkateById(obj, req.body.id_product);
      res.redirect('/admin/products/skates/skates_list');
   } catch (error) {
      res.render('admin/products/skates/update', {
         usuario: req.session.nombre,
         layout: 'admin/layout',
         error: true,
         message: 'No se modifico el poducto'
      })
   }
})










module.exports = router;