const express = require('express');
const router = express.Router();
const Music = require('../models/music');

// Show all music albums
router.get('/', async (req, res) => {
    const albums = await Music.find({});
    res.render('index', { albums });
});

// Show form to create new album
router.get('/new', (req, res) => {
    res.render('new');
});

// Add new album
router.post('/', async (req, res) => {
    const { musicTitle, artist, genre, releaseYear } = req.body;
    await Music.create({ musicTitle, artist, genre, releaseYear });
    res.redirect('/music-album');
});

// Show single album details
router.get('/:id', async (req, res) => {
    const album = await Music.findById(req.params.id);
    res.render('show', { album });
});

// Show form to edit album
router.get('/:id/edit', async (req, res) => {
    const album = await Music.findById(req.params.id);
    res.render('edit', { album });
});

// Update album
router.put('/:id', async (req, res) => {
    const { artist, genre, releaseYear } = req.body;
    await Music.findByIdAndUpdate(req.params.id, { artist, genre, releaseYear });
    res.redirect(`/music-album/${req.params.id}`);
});

// Delete album
router.delete('/:id', async (req, res) => {
    await Music.findByIdAndDelete(req.params.id);
    res.redirect('/music-album');
});

module.exports = router;
