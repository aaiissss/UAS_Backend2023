const News = require('./models/News');

exports.getAllNews = async (req, res) => {
 try {
 const news = await News.findAll();
 res.json(news);
 } catch (error) {
 res.status(500).json({ message: 'Something went wrong!' });
 }
};

exports.getNewsByID = async (req, res) => {
 try {
 const news = await News.findByPk(req.params.id);
 if (!news) {
   return res.status(404).json({ message: 'News not found!' });
 }
 res.json(news);
 } catch (error) {
 res.status(500).json({ message: 'Something went wrong!' });
 }
};

// Tambahkan method lainnya untuk mengakses tabel news