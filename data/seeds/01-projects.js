exports.seed = async function(knex) {
    await knex('projects').insert([
        {
            project_name: 'LAMBDA Week 1 Sprint Challenge',
            project_description: 'Build out API endpoints'
        },
        {
            project_name: 'LAMBDA Week 2 Sprint Challenge',
            project_description: 'Build a database from scratch'
        }
    ]);
}
