exports.seed = async function(knex) {
    await knex('tasks').insert([
        {
            task_description: 'Scaffold your router, model, and middleware files',
            task_notes: "Don't forget to setup your index and server files!",
            project_id: 1
        },
        {
            task_description: 'Scaffold the entire structure of your app[lication',
            task_notes: "Don't forget to import all your dependencies!",
            project_id: 2
        }
    ]);
}
