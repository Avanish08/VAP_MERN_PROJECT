const News = require('../Models/News');

// Get all news articles
const getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ date: -1 }); // Sort by date, most recent first
    res.json(news);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

module.exports = { getAllNews };
