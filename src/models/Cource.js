const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
const slugify = require('slugify'); // Import thư viện slugify

// Định nghĩa schema cho mô hình "Course"
const Course = new Schema({
    name: { type: String },         // Tên của khóa học
    description: { type: String },  // Mô tả của khóa học
    image: { type: String },        // URL hình ảnh liên quan đến khóa học
    level: { type: String },        // Cấp độ của khóa học
    slug: { type: String },         // Trường dùng để lưu giá trị slug của khóa học
    createAt: { type: Date, default: Date.now }, // Thời điểm tạo khóa học (mặc định là thời điểm hiện tại)
    updateAt: { type: Date, default: Date.now }, // Thời điểm cập nhật khóa học (mặc định là thời điểm hiện tại)
});

// Middleware để tạo slug dựa trên tên của khóa học trước khi lưu vào cơ sở dữ liệu
Course.pre('save', function(next) {
    this.slug = slugify(this.name, { lower: true }); // Tạo slug từ "name"
    next();
});

// Sử dụng plugin "mongoose-delete" để cung cấp khả năng xóa ẩn và khôi phục dữ liệu
Course.plugin(mongooseDelete,{overrideMethods:'all',deletedAt:true});

// Export mô hình "Course" đã định nghĩa
module.exports = mongoose.model('Course', Course);
