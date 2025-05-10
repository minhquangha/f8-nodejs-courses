const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const course = new Schema(
    {
        name: { type: String, maxLength: 255, require: true },
        description: { type: String, maxLength: 255 },
        image: { type: String, maxLength: 255 },
        videoID: { type: String, maxLength: 255, require: true },
        level: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true }
    },
    { timestamps: true }
);

//add plugin
mongoose.plugin(slug);
course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('course', course);
