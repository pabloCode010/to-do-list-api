const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    description: String,
    complete: Boolean,
    date: Date
});

const task = new model("task", taskSchema);

module.exports = task;