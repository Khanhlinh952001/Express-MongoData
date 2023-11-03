// Import framework Express
const express = require('express');
const router = express.Router();
const NewsController = require('../app/controllers/NewControllers');

// Tạo một thể hiện của NewsController
const newsController = new NewsController();

// Định nghĩa xử lý tuyến đường cho tuyến đường "code" sử dụng router.get
router.get('/code', newsController.slug);
// Định nghĩa xử lý tuyến đường cho tuyến đường gốc '/' sử dụng router.get
router.get('/', newsController.index);

module.exports = router;
