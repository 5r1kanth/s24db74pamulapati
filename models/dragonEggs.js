const mongoose = require("mongoose")
const dragonEggSchema = mongoose.Schema({
size: Number,
color: String,
rarity: String
})
module.exports = mongoose.model("dragonEggs", 
dragonEggSchema)