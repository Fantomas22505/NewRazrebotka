const express = require('express');
const router = express.Router();
const {Recept, Ingred} = require('../models')

/* GET home page. */
router.get('/', async function (req, res, next) {
  const recepts = await Recept.findAll();
  res.render('index', { title: 'Express',recepts });
});

router.get('/ingreds/:idRecept', async function (req, res, next) {
  const idRecept = req.params.idRecept;
  const recept = await Recept.findByPk(idRecept);

  const ingreds = await Ingred.findAll({where: {receptId: idRecept}});
  res.render('ingreds', { title: 'Ingreds',recept });
});


router.get('/addRecept', async function (req, res, next) {
  res.render('addRecept', {title: 'New recept',});
});

router.post('/addRecept', async function (req, res, next) {
  const recept = new Recept({name: req.body.receptName});
  await recept.save();
  res.redirect('/')
});


  router.get('/addIngred', async function (req, res, next) {
    const teams = await Recept.findAll();
    res.render('addIngred', {title: 'New ingred', teams});
  });

  router.post('/addPlayer', async function (req, res, next) {
    const ingred = new Ingred(req.body);
    await ingred.save();
    res.redirect('/');
  });



module.exports = router;
