const express = require('express');
const Resources = require('./model');
const {
    validateResource,
    checkUniqueResource
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
router.post('/', validateResource, checkUniqueResource, async (req, res, next) => {
    try {
        const createdResource = await Resources.createResource(req.body);
        res.status(201).json(createdResource);
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
