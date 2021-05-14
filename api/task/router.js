const express = require('express');
const Tasks = require('./model');
const {
    validateTask,
    checkExistingProject
} = require('../middleware');

const router = express.Router();

// get all tasks
router.get('/', async (req, res, next) => {
    try {
        const tasks = await Tasks.getTasks();
        res.json(tasks);
    } catch (err) {
        next(err);
    }
});

// create new task
router.post('/', validateTask, checkExistingProject, async (req, res, next) => {
    try {
        const createdTask = await Tasks.createTask(req.body);
        res.status(201).json(createdTask);
    } catch (err) {
        next(err);
    }
});

// catch-all error handler
router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        note: 'An error occurred in the task router!',
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;

