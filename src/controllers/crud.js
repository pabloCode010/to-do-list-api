const task = require("../database/task");

async function create(req, res, next){
    req.body.date = Date(req.body.date);
    const newTask = new task(req.body);
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
}

async function read(req, res, next){
    const { id } = req.query;
    const taskSearch = await task.findOne({_id: id});
    if (!taskSearch){
        return next("error");
    }
    res.status(200).json(taskSearch);
}

async function update(req, res, next){
    const { id } = req.query;
    const taskUpdate = await task.findOneAndUpdate({_id: id}, req.body, { new: true });
    if (!taskUpdate){
        return next("error");
    }
    res.status(200).json(taskUpdate);
}

//delete es palabra reservada en js, por eso se llama delete_

async function delete_(req, res, next){
    const { id } = req.query;
    const taskDelete = await task.findOneAndDelete({_id: id});
    if (!taskDelete){
        return next("error");
    }
    res.status(200).json({
        "delete": taskDelete
    });
}

module.exports = {
    create,
    read,
    update,
    delete_
}