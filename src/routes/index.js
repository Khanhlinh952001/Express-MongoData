// Import các tuyến đường (routers) từ các tệp khác
const newsRouter = require('./new');
const newSiteRouter = require('./site');
const newMeRouter = require('./me');
const newCourseRouter = require('./cources');

// Định nghĩa một hàm route để cấu hình tuyến đường (route) cho ứng dụng Express
function route(app) {
    // Sử dụng tuyến đường '/me' và router newMeRouter
    app.use('/me', newMeRouter);
    // Sử dụng tuyến đường '/courses' và router newCourseRouter
    app.use('/courses', newCourseRouter);
    // Sử dụng tuyến đường '/news' và router newsRouter
    app.use('/news', newsRouter);
    // Sử dụng tuyến đường '/' và router newSiteRouter
    app.use('/', newSiteRouter);
}

module.exports = route;
