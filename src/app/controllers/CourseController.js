const Course = require('../../app/model/Courses');
const { mongooseToObject } = require('../../util/mongoose');

class CouresController {
    //course/nodejs
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }

    //get /course/create
    create(req, res) {
        res.render('courses/create');
    }

    store(req, res) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${formData.videoID}/maxresdefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/store'))
            .catch((err) => {});
    }
    //get course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id).then((course) =>
            res.render('courses/edit', {
                course: mongooseToObject(course)
            })
        );
    }
    //put course/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body).then(() => {
            res.redirect('/me/stored/courses');
        });
    }
    //delete /courses/:id
    destroy(req, res, next) {
        const backURL=req.header('Referer') || '/';
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect(backURL))
            .catch(next);
    }

    forceDelete(req, res, next) {
        const backURL=req.header('Referer') || '/';
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect(backURL))
            .catch(next);
    }
    restore(req,res,next){
        const backURL=req.header('Referer') || '/';
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect(backURL))
            .catch(next);
    }

    handleFormActions(req,res,next){
        const backURL=req.header('Referer') || '/';
        switch(req.body.action){
            case 'delete':
                Course.delete({ _id: {$in: req.body.coursesIds} })
            .then(() => res.redirect(backURL))
            .catch(next);
                break;
            default:
                res.json({MessageEvent: 'action not found'});
        }

    }



}
module.exports = new CouresController();
