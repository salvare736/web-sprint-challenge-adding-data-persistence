const db = require('../../data/dbConfig');

function getResources() {
    return db.select('*').from('resources');
}

async function getResourceById(resource_id) {
    const searchedResource = await db('resources').where('resource_id', resource_id).first();
    return searchedResource;
}

async function getResourceByName(resource_name) {
    const searchedResource = await db('resources').where('resource_name', resource_name).first();
    return searchedResource;
}

async function createResource(resource) {
    const [resource_id] = await db('resources').insert(resource);
    return getResourceById(resource_id);
}

module.exports = {
    getResources,
    getResourceById,
    getResourceByName,
    createResource
}

