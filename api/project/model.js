const db = require('../../data/dbConfig');

function getProjects() {
    return db.select('*').from('projects');
}

async function getProjectById(project_id) {
    const searchedProject = await db('projects').where('project_id', project_id).first();
    return searchedProject;
}

async function createProject(project) {
    const [project_id] = await db('projects').insert(project);
    return getProjectById(project_id);
}

module.exports = {
    getProjects,
    getProjectById,
    createProject
}
