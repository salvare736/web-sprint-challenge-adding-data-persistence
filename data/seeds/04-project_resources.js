exports.seed = async function(knex) {
    await knex('project_resources').insert([
        {
            resource_id: 1,
            project_id: 1
        },
        {
            resource_id: 2,
            project_id: 2
        }
    ]);
}
