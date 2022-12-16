var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Group2',
    section:'Home',
    userName: req.user ? req.user.username : '',
    userRole: req.user ? req.user.userrole : ''});
});

/* GET newsfeed page. */
router.get('/newsfeed', function(req, res, next) {
  res.render('newsfeed', { 
    title: 'Group2',
     section:'NewsFeed',
     userName: req.user ? req.user.username : '',
     userRole: req.user ? req.user.userrole : ''});
});

/* GET Vacinnation Centers page. */
router.get('/vaccination_centers', function(req, res, next) {
  res.render('vaccination_centers', { 
    title: 'Group2',
     section:'VaccinationCenters',
     userName: req.user ? req.user.username : '',
     userRole: req.user ? req.user.userrole : ''});
});

/* GET Statistics page. */
router.get('/statistics', function(req, res, next) {
  res.render('statistics', { 
    title: 'Group2',
     section:'Statistics',
     userName: req.user ? req.user.username : '',
     userRole: req.user ? req.user.userrole : ''});
});

module.exports = router;
