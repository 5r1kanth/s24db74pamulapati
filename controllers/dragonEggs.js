var dragonEggs = require('../models/dragonEggs');
// List of all dragonEggss
// exports.dragonEggs_list = function (req, res) {
//     res.send('NOT IMPLEMENTED: dragonEggs list');
// };
// for a specific dragonEggs.
// exports.dragonEggs_detail = function (req, res) {
//     res.send('NOT IMPLEMENTED: dragonEggs detail: ' + req.params.id);
// };
// Handle dragonEggs create on POST.
// exports.dragonEggs_create_post = function (req, res) {
//     res.send('NOT IMPLEMENTED: dragonEggs create POST');
// };
// Handle dragonEggs delete from on DELETE.
// exports.dragonEggs_delete = function (req, res) {
//     res.send('NOT IMPLEMENTED: dragonEggs delete DELETE ' + req.params.id);
// };
// Handle dragonEggs update form on PUT.
// exports.dragonEggs_update_put = function (req, res) {
//     res.send('NOT IMPLEMENTED: dragonEggs update PUT' + req.params.id);
// };

// List of all dragonEggss
exports.dragonEggs_list = async function (req, res) {
    try {
        dragon = await dragonEggs.find();
        res.send(dragon);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};;

// VIEWS
// Handle a show all view
exports.dragonEggs_view_all_Page = async function (req, res) {
    try {
        dragon = await dragonEggs.find();
        res.render('dragonEggs', { title: 'DragonEggs Search Results', results: dragon });
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
    // {"dragonEggs_type":"goat", "color":12, "rarity":"large"}
    document.size = req.body.size;
    document.color = req.body.color;
    document.rarity = req.body.rarity;
    try {
        let results = await document.save();
        res.send(results);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

//Assignment 12
// for a specific dragonEggs.
exports.dragonEggs_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        results = await dragonEggs.findById(req.params.id)
        res.send(results)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle dragonEggs update form on PUT.
exports.dragonEggs_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await dragonEggs.findById(req.params.id)
        // Do updates of properties
        // if (req.body.dragonEggs_type) toUpdate.dragonEggs_type = req.body.dragonEggs_type;
        if (req.body.size) toUpdate.size = req.body.size;
        if (req.body.color) toUpdate.color = req.body.color;
        if (req.body.rarity) toUpdate.rarity = req.body.rarity;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};

// Handle dragonEggs delete on DELETE.
exports.dragonEggs_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        results = await dragonEggs.findByIdAndDelete(req.params.id)
        console.log("Removed " + results)
        res.send(results)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.dragonEggs_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        results = await dragonEggs.findById(req.query.id)
        res.render('dragonEggsdetail',
            { title: 'dragonEggs Detail', toShow: results });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a dragonEggs.
// No body, no in path parameter, no query.
// Does not need to be async
exports.dragonEggs_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('dragonEggscreate', { title: 'dragonEggs Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a dragonEggs.
// query provides the id
exports.dragonEggs_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let results = await dragonEggs.findById(req.query.id)
        res.render('dragonEggsupdate', { title: 'dragonEggs Update', toShow: results });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.dragonEggs_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await dragonEggs.findById(req.query.id)
        res.render('dragonEggsdelete', {
            title: 'dragonEggs Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

