const db = require('../../data/dbConfig');

function getTasks() {
    return db.select('*').from('tasks');
}

async function createTask(task) {
    return task;
}

module.exports = {
    getTasks,
    createTask
}

