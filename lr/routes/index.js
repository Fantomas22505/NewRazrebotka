const express = require('express');
const router = express.Router();
const {Team} = require('../models');
const {Player2} = require('../models');

/* GET home page. */
router.get('/', function (req, res, next) {
 res.render('index', {title: 'Express'});
});

router.get('/admin', function (req, res, next) {
 res.render('admin', {title: 'Admin Login'});
});


router.get('/visitors', function (req, res, next) {
 res.render('visitors', {title: 'Visitor menu'});
});

router.get('/team', async function(req, res, next) {
 const teams = await Team.findAll();
 console.log(teams);
  res.render('team', { title: 'Team:лабораторная',teams});
});

router.get('/players/:idTeam', async function(req, res, next) {
 const idTeam=req.params.idTeam;
 const team = await Team.findByPk(idTeam);

 const players = await Player2.findAll({where:{teamID:idTeam}});
 //const players = await team.getPlayers();

 console.log(idTeam);
 res.render('players', { title: 'Players:лабораторная',team,players});
});

router.get('/addTeam', async function(req, res, next) {
 res.render('addTeam', { title: 'New team'});
});

router.post('/addTeam', async function (req, res, next) {
 const team = new Team(req.body);

 await team.save();


 res.redirect('/')
});

router.get('/addPlayer', async function (req, res, next) {
 const teams = await Team.findAll();
 res.render('addPlayer', {title: 'New player', teams});
});

router.post('/addPlayer', async function (req, res, next) {
 const player = new Player2(req.body);
 await player.save();
 res.redirect('/');
});
module.exports = router;
