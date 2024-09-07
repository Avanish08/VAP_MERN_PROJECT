const router = require('express').Router();
const { getAllNews } = require('../Controllers/NewsController');

// Get all news articles
router.get('/news', getAllNews);

module.exports = router;
