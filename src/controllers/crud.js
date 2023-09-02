const task = require("../database/task");
const Boom = require('@hapi/boom');

async function all(req, res){
    const tasks = await task.find({});
    res.status(200).json(tasks);
}

async function create(req, res){
    req.body.date = new Date(req.body.date);
    const newTask = new task(req.body);
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
}

async function read(req, res, next){
    const { id } = req.query;
    const taskSearch = await task.findOne({_id: id});
    if (!taskSearch){
        return next(Boom.notFound(`task with id ${id} does not exist`));
    }
    res.status(200).json(taskSearch);
}

async function update(req, res, next){
    const { id } = req.query;
    const taskUpdate = await task.findOneAndUpdate({_id: id}, req.body, { new: true });
    if (!taskUpdate){
        return next(Boom.notFound(`task with id ${id} does not exist`));
    }
    res.status(200).json(taskUpdate);
}

//delete is reserved word in js, that's why it is called delete_

async function delete_(req, res, next){
    const { id } = req.query;
    const taskDelete = await task.findOneAndDelete({_id: id});
    if (!taskDelete){
        return next(Boom.notFound(`task with id ${id} does not exist`));
    }
    res.status(200).json({
        "delete": taskDelete
    });
}

module.exports = {
    create,
    read,
    update,
    delete_,
    all
}