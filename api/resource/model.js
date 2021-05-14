const db = require('../../data/dbConfig');

function getResources() {
    return db.select('*').from('resources');
}

async function createResource(resource) {
    return resource;
}

module.exports = {
    getResources,
    createResource
}

