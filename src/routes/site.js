// Import framework Express
const express = require('express');
const router = express.Router();
const SiteController = require('../app/controllers/SiteControllers');

// Tạo một thể hiện của SiteController
const siteController = new SiteController();

// Định nghĩa xử lý tuyến đường cho tuyến đường "search" sử dụng router.get
router.get('/search', siteController.search);
// Định nghĩa xử lý tuyến đường cho tuyến đường gốc '/' sử dụng router.get
router.get('/', siteController.home);

module.exports = router;
