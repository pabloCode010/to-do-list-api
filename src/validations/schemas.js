const Joi = require('joi');
const { isValidObjectId } = require('mongoose');

const _id = Joi.string().custom((value, helpers) => {
    if (!isValidObjectId(value)) {
      return helpers.message('Invalid Id');
    }
    return value;
});

const description = Joi.string().min(5).max(100);
const complete = Joi.bool().default(false);
const date = Joi.string()
.default(value => {
    return new Date().toISOString();
})
.custom((value, helpers) => {
    const dateObject = new Date(value);
    if (dateObject == "Invalid Date"){
        return helpers.message('Invalid Date');
    }
    return value;
});

const createTask = Joi.object({
    description: description.required(),
    complete,
    date
});

const updateTask = Joi.object({
    description,
    complete,
    date
});

const searchById = Joi.object({
    id: _id.required()
});

module.exports = {
    searchById,
    createTask,
    updateTask
};