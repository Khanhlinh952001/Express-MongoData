// Import mô hình Course từ tệp cục bộ
const Course = require('../../models/Cource.js');

// Import các hàm hữu ích từ tệp mongoose.js trong thư mục 'utils'
const { mongooseToObject, mutipleMongooseToObject } = require("../../utils/mongoose.js");
const mongoose = require('mongoose');

class CourseControllers {
    // Xem thông tin của một khóa học dựa trên slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .lean()
            .then((course) => {
                res.render("courses/show", { course: course });
            })
            .catch(next);
    }

    // GET - Hiển thị trang tạo mới khóa học
    create(req, res, next) {
        res.render('courses/create');
    }

    // POST - Lưu thông tin khóa học mới
    store(req, res, next) {
        const course = new Course(req.body);
        course.save()
            .then(() => {
                // Tải lại trang trên phía máy khách (trình duyệt) sau khi lưu dữ liệu thành công
                res.redirect('/'); // Chuyển hướng về trang chủ
            })
            .catch(next);
    }

    // GET - Hiển thị trang chỉnh sửa khóa học dựa trên ID
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => {
                res.render('courses/edit', { course: mongooseToObject(course) });
            })
            .catch(next);
    }

    // PUT - Cập nhật thông tin khóa học dựa trên ID
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                res.redirect('/me/stored/courses');
            })
            .catch(next);
    }

    // DELETE - Xóa khóa học dựa trên ID
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }

    // DELETE - Xóa vĩnh viễn khóa học dựa trên ID
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }

    // PATCH - Khôi phục (restore) khóa học đã bị xóa dựa trên ID
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }
}

module.exports = CourseControllers;
