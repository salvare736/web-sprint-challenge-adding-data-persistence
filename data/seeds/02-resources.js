exports.seed = async function(knex) {
    await knex('resources').insert([
        {
            resource_name: 'CANVAS pre-course modules',
            resource_description: 'Delves into the LAMBDA curriculum'
        },
        {
            resource_name: 'W3schools',
            resource_description: 'Documentation for myriad tools'
        }
    ]);
}
