exports.up = async function(knex) {
    await knex.schema
        .createTable('projects', tbl => {
            tbl.increments('project_id')
            tbl.string('project_name').notNullable()
            tbl.string('project_description')
            tbl.integer('project_completed').defaultTo(0)
        })
        .createTable('resources', tbl => {
            tbl.increments('resource_id')
            tbl.string('resource_name').notNullable().unique()
            tbl.string('resource_description')            
        })
        .createTable('tasks', tbl => {
            tbl.increments('task_id')
            tbl.string('task_description').notNullable()
            tbl.string('task_notes')
            tbl.integer('task_completed').defaultTo(0)
            tbl.integer('project_id')
                .unsigned()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
        })
        .createTable('project_resources', tbl => {
            tbl.increments('project_resource_id')
            tbl.integer('resource_id')
                .unsigned()
                .references('resource_id')
                .inTable('resources')
                .onDelete('RESTRICT')
            tbl.integer('project_id')
                .unsigned()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
        });
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects');
};
