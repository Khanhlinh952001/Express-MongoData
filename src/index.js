// Import framework Express
const express = require('express');
const app = express();
const port = 3000;
// Import Morgan để ghi lại các yêu cầu HTTP
const morgan = require('morgan');
// Import path và Express Handlebars để render các trang web
const path = require('path');
const exphbs = require('express-handlebars');
// Import và cấu hình Method Override để hỗ trợ ghi đè phương thức HTTP trong các biểu mẫu
const methodOverride = require('method-override');

// Import và kết nối đến cơ sở dữ liệu
const db = require('./config/db');
db.connect();

const route = require('./routes/index');

// Phân tích các yêu cầu POST của dạng URL-encoded và JSON
app.use(
    express.urlencoded({
        extended: true,
    })
);

// Sử dụng Method Override để hỗ trợ ghi đè phương thức HTTP trong biểu mẫu
app.use(methodOverride('_method'));
app.use(express.json());

// Bật ghi log yêu cầu HTTP bằng Morgan
app.use(morgan('combined'));

// Cấu hình engine Handlebars để render trang web
app.engine(
    'hbs',
    exphbs.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// Phục vụ các tệp tĩnh từ thư mục 'public'
app.use(express.static(path.join(__dirname, 'public')));
// Định nghĩa và sử dụng các tuyến đường (routes)
route(app);

// Khởi động máy chủ trên cổng đã chỉ định
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
