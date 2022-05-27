const express = require('express');
const router = express.Router();
const {Order, Pizza} = require('../models');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const orders = await Order.findAll();

  res.render('index', { title: 'Pizzas', orders });
});

router.get('/pizzas/:idOrder', async function(req, res, next) {
  const idOrder = req.params.idOrder;
  const order = await Order.findByPk(idOrder);

  console.log(idOrder);
  const pizzas = await Pizza.findAll({where: {orderId: idOrder}});

  router.get('/addOrder', async function (req, res, next) {
    res.render('addOrder', {title: 'AddOrder:Pizzas',});
  });

  router.post('/addOrder', async function (req, res, next) {
    const order = new Order({name: req.body.orderNumber});
    await order.save();
    res.redirect('/')
  });

  router.get('/addPizza', async function (req, res, next) {
    const orders = await Order.findAll();
    res.render('addPizza', {title: 'AddOrder:Pizzas', orders});
  });

  router.post('/addPizza', async function (req, res, next) {
    const pizza = new Pizza(req.body);
    await pizza.save();
    res.redirect('/');
  });



  res.render('pizzas', { title: 'Pizzas', order, pizzas});
});

module.exports = router;
