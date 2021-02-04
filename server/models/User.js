const mongoose = require("mongoose");

/* Create User Schema */

const favoriteSchema = new mongoose.Schema({
    id: {type: String, required: true},
    date: { }
})

const userSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    favorite: { type: [favoriteSchema], required: true},
    cart: {type: String, required: true},
    borrowed: {},
    request: {type: String, required: true},
    notification: {}


  });

  module.exports = User = mongoose.model("user", userSchema);