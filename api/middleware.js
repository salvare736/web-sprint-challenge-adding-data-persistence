const Projects = require('./project/model');
const Resources = require('./resource/model');
const Tasks = require('./task/model');

async function middleware(req, res, next) {
    try {
        
    } catch (err) {
        next(err);
    }
}

module.exports = {
    middleware
}
