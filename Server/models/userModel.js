const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title : {type: String, require: true},
    completed : {type: Boolean, require: false, default: false }
})

const postSchema = new mongoose.Schema({
    title : {type: String, require: true},
    body : {type: String, require: false}
})

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    street: { type: String, required: false, default: "" },
    city: { type: String, required: false, default: "" },
    zipcode: { type: Number, required: false, default: 0 },
    tasks : [{type: taskSchema, required: false}],
    posts : [{type: postSchema, required: false}]
});

module.exports = mongoose.model('users', UserSchema);


