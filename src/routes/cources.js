const express = require('express');
const router = express.Router();
const CourseControllers = require("../app/controllers/CourceControllers");

const courseControllers = new CourseControllers();

// Định nghĩa một xử lý tuyến đường cho tuyến đường "create" sử dụng router.get
router.get('/create', courseControllers.create);
// Xử lý yêu cầu POST tới tuyến đường "store"
router.post('/store', courseControllers.store);
// Xử lý yêu cầu GET tới tuyến đường "edit" với một ID cụ thể
router.get('/:id/edit', courseControllers.edit);
// Xử lý yêu cầu PUT để cập nhật một khóa học với ID cụ thể
router.put('/:id', courseControllers.update);
// Xử lý yêu cầu PATCH để khôi phục (restore) một khóa học đã bị xóa
router.patch('/:id/restore', courseControllers.restore);
// Xử lý yêu cầu DELETE để xóa một khóa học vĩnh viễn
router.delete('/:id', courseControllers.destroy);
// Xử lý yêu cầu DELETE để xóa một khóa học một cách vĩnh viễn (force destroy)
router.delete('/:id/forceDestroy', courseControllers.forceDestroy);
// Xử lý yêu cầu GET để hiển thị thông tin về một khóa học dựa trên slug
router.get('/:slug', courseControllers.show);

module.exports = router;
