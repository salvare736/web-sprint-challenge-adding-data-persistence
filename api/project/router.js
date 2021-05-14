const express = require('express');
const Projects = require('./model');
const Resources = require('../resource/model');
const Tasks = require('../task/model');
const {
    middleware
} = require('../middleware');

const router = express.Router();

// get all projects
router.get('/', async (req, res, next) => {
    try {

    } catch (err) {
        next(err);
    }
});

// create new project
router.post('/', async (req, res, next) => {
    try {

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
