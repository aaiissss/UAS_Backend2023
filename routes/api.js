const express = require('express');
const router = express.Router();

const { getAllNews, getNewsByID } = require('../controllers/controller');

router.get('/', getAllNews);
router.get('/:id', getNewsByID);

// Tambahkan route lainnya untuk mengakses tabel news

module.exports = router;