const Task = require("../models/task");

exports.getTaskById = (req, res, next, id) => {
  Task.findById(id).exec((err, task) => {
    if (err) {
      return res.status(400).json({
        error: "Task not found in DB",
      });
    }
    req.task = task;
    next();
  });
};

exports.createTask = (req, res) => {
  const task = new Task(req.body);
  task.save((err, task) => {
    if (err) {
      return res.status(400).json({
        error: "NOT able to save task in DB",
      });
    }
    res.json({ task });
  });
};

exports.getTask = (req, res) => {
  return res.json(req.task);
};

exports.getAllTask = (req, res) => {
  Task.find().exec((err, task) => {
    if (err) {
      return res.status(400).json({
        error: "NO tasks found",
      });
    }
    res.json(task);
  });
};

exports.updateTask = (req, res) => {
  const task = req.task;
  task.name = req.body.name;

  task.save((err, updatedTask) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to update task",
      });
    }
    res.json(updatedTask);
  });
};

exports.removeTask = (req, res) => {
  const task = req.task;

  task.remove((err, task) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete this task",
      });
    }
    res.json({
      message: "Successfull deleted",
    });
  });
};
