var express = require('express');
const dragonEggs = require('../models/dragonEggs');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
// or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }


/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('dragonEggs', { title: 'Search Results - Dragon Eggs' });
// });


const dragonEggs_controlers = require('../controllers/dragonEggs');

router.get('/', dragonEggs_controlers.dragonEggs_view_all_Page);
/* GET detail dragonEggs page */
router.get('/detail', dragonEggs_controlers.dragonEggs_view_one_Page);
/* GET create dragonEggs page */
router.get('/create', dragonEggs_controlers.dragonEggs_create_Page);
/* GET create update page */
// router.get('/update', dragonEggs_controlers.dragonEggs_update_Page);
/* GET delete dragonEggs page */
router.get('/delete', dragonEggs_controlers.dragonEggs_delete_Page);

/* GET update costume page */
router.get('/update', secured, 
dragonEggs_controlers.dragonEggs_update_Page);

module.exports = router;
