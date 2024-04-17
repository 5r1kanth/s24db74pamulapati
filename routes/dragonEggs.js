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

const dragonEggs_controlers = require('../controllers/dragonEggs');

router.get('/', dragonEggs_controlers.dragonEggs_view_all_Page);
/* GET detail dragonEggs page */
router.get('/detail', dragonEggs_controlers.dragonEggs_view_one_Page);
/* GET update costume page */
router.get('/create', secured, dragonEggs_controlers.dragonEggs_create_Page);
router.get('/update', secured, dragonEggs_controlers.dragonEggs_update_Page);
router.get('/delete', secured, dragonEggs_controlers.dragonEggs_delete_Page);

module.exports = router;
