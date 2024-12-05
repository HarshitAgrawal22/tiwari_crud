const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const musicRoutes = require('./routes/music');

const app = express();

// Database connection
mongoose.connect('mongodb+srv://harsh:Harshit@cluster0.ng24d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

// Set view engine
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.redirect("/music-album")
})

// Routes
app.use('/music-album', musicRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
