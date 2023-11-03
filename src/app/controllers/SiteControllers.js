const Course = require('../../models/Cource.js');
 // Check the correct path and capitalization
const {MongooseToObJect, mutipleMongooseToObject}  = require("../../utils/mongoose.js")
const mongoose = require('mongoose')
class SiteControllers {
    async  home(req, res) {

        try {
            const courses = await Course.find({});
            //truyen du lieu qua trang home de hien thi ra nguoi dung  
            res.render('home',{courses: mutipleMongooseToObject(courses)});
        } catch (error) {
            res.status(400).json({ error: 'ERROR!!!' });
        }
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = SiteControllers;
