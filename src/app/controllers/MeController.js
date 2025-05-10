const Course = require('../model/Courses');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    //GET /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/storedCourses', {
                    courses: mutipleMongooseToObject(courses)
                })
            )
            .catch(next);
    }

    //GET /me/trash/courses
    trashCourses(req, res, next) {
        Course.findWithDeleted({deleted:true})
        .then((courses) =>
            res.render('me/trashCourses', {
                courses: mutipleMongooseToObject(courses)
            })
        )
        .catch(next);
    }
}

    module.exports = new MeController();
