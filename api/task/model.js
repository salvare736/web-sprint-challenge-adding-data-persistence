const db = require('../../data/dbConfig');

function getTasks() {
    return db.select('*').from('tasks');
}

async function getTaskById(task_id) {
    const searchedTask = await db('tasks').where('task_id', task_id).first();
    return searchedTask;
}

async function createTask(task) {
    const [task_id] = await db('tasks').insert(task);
    return getTaskById(task_id);
}

module.exports = {
    getTasks,
    getTaskById,
    createTask
}

