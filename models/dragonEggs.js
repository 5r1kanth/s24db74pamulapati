const mongoose = require("mongoose")
const dragonEggSchema = mongoose.Schema({

    size: {
        type : Number,
        required: [true, "dragonEgg size is required"],
        min: [1, "Size must be at least 1"],
    },

    color: {
        type : String,
        required: [true, "Dragon Egg color is required"],
        minlength : [3, "Color must be at least 3"],
    },

    rarity: {
        type : String,
        required: [true, "Rarity is required"],
        minlength : [3, "Rarity must be at least 3"],
    }
    })


module.exports = mongoose.model("dragonEggs", 
dragonEggSchema)