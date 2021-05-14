const express = require('express');
const Projects = require('./model');
const {
    validateProject
} = require('../middleware');

const router = express.Router();

// get all projects
router.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.getProjects();
        res.json(projects);
    } catch (err) {
        next(err);
    }
});

// create new project
router.post('/', validateProject, async (req, res, next) => {
    try {
        const createdProject = await Projects.createProject(req.body);
        res.status(201).json(createdProject);
    } catch (err) {
        next(err);
    }
});

// catch-all error handler
router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        note: 'An error occurred in the project router!',
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;
