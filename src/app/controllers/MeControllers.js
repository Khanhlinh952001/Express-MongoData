// Import mô hình Course từ tệp cục bộ
const Course = require('../../models/Cource.js');

// Import các hàm hữu ích từ tệp mongoose.js trong thư mục 'utils'
const { mongooseToObject, mutipleMongooseToObject } = require("../../utils/mongoose.js");
const mongoose = require('mongoose');

class MeControllers {
  // Xem các khóa học đã lưu trữ
  storedCourses(req, res, next) {
    Course.find({})
      .then(courses => {
        res.render('me/stored_courses', {
          courses: mutipleMongooseToObject(courses)
        });
      })
      .catch(next);
  }

  // Xem các khóa học đã bị xóa
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then(courses => {
        res.render('me/trash_courses', {
          courses: mutipleMongooseToObject(courses)
        });
      })
      .catch(next);
  }
}

module.exports = MeControllers;
