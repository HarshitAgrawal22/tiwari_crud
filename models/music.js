const mongoose = require('mongoose');

// Define schema
const musicSchema = new mongoose.Schema({
    musicTitle: { type: String, required: true, trim: true },
    artist: { type: String, required: true, trim: true },
    genre: { type: String, required: true, trim: true },
    releaseYear: { type: Number, required: true }
});

// Create model
const Music = mongoose.model('Music', musicSchema);

module.exports = Music;
