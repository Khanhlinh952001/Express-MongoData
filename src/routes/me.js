// Import framework Express
const express = require('express');
const router = express.Router();
const MeControllers = require("../app/controllers/MeControllers");

// Tạo một thể hiện của MeControllers
const meControllers = new MeControllers();

// Định nghĩa xử lý tuyến đường cho tuyến đường "stored/courses" sử dụng router.get
router.get('/stored/courses', meControllers.storedCourses);
// Định nghĩa xử lý tuyến đường cho tuyến đường "trash/courses" sử dụng router.get
router.get('/trash/courses', meControllers.trashCourses);

module.exports = router;
