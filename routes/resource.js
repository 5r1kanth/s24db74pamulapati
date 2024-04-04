var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var dragonEggs_controller = require('../controllers/dragonEggs');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume. 
router.post('/dragonEggs', dragonEggs_controller.dragonEggs_create_post);
// DELETE request to delete Costume.
router.delete('/dragonEggs/:id', dragonEggs_controller.dragonEggs_delete);
// PUT request to update Costume.
router.put('/dragonEggs/:id', dragonEggs_controller.dragonEggs_update_put);
// GET request for one Costume.
router.get('/dragonEggs/:id', dragonEggs_controller.dragonEggs_detail);
// GET request for list of all Costume items.
router.get('/dragonEggs', dragonEggs_controller.dragonEggs_list);
module.exports = router;