const db = require('../../data/dbConfig');

function getProjects() {
    return db.select('*').from('projects');
}

async function createProject(project) {
    return project;
}

module.exports = {
    getProjects,
    createProject
}
