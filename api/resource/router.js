const express = require('express');
const Projects = require('../project/model');
const Resources = require('./model');
const Tasks = require('../task/model');
const {
    middleware
} = require('../middleware');

const router = express.Router();

// get all resources
router.get('/', async (req, res, next) => {
    try {
        const resources = await Resources.getResources();
        res.json(resources);
    } catch (err) {
        next(err);
    }
});

// create new resource
router.post('/', async (req, res, next) => {
    try {

    } catch (err) {
        next(err);
    }
});

// catch-all error handler
router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        note: 'An error occurred in the resource router!',
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;
