var dragonEggs = require('../models/dragonEggs');
// List of all dragonEggss
exports.dragonEggs_list = function (req, res) {
    res.send('NOT IMPLEMENTED: dragonEggs list');
};
// for a specific dragonEggs.
exports.dragonEggs_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: dragonEggs detail: ' + req.params.id);
};
// Handle dragonEggs create on POST.
exports.dragonEggs_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: dragonEggs create POST');
};
// Handle dragonEggs delete from on DELETE.
exports.dragonEggs_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: dragonEggs delete DELETE ' + req.params.id);
};
// Handle dragonEggs update form on PUT.
exports.dragonEggs_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: dragonEggs update PUT' + req.params.id);
};

// List of all dragonEggss
exports.dragonEggs_list = async function (req, res) {
    try {
        thedragonEggs = await dragonEggs.find();
        res.send(thedragonEggs);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.dragonEggs_view_all_Page = async function (req, res) {
    try {
        thedragonEggss = await dragonEggs.find();
        res.render('dragonEggs', { title: 'DragonEggs Search Results', results: thedragonEggs });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle dragonEggs create on POST.
exports.dragonEggs_create_post = async function (req, res) {
    console.log(req.body)
    let document = new dragonEggs();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"dragonEggs_type":"goat", "cost":12, "size":"large"}
    document.dragonEggs_type = req.body.dragonEggs_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


