const yup = require('yup');
const Projects = require('./project/model');
const Resources = require('./resource/model');

const projectSchema = yup.object({
    project_name: yup.string()
        .trim()
        .required('project_name is required'),
    project_description: yup.string()
        .trim(),
    project_completed: yup.number()
        .min(0, 'project_completed must be a boolean: 1 for complete, 0 for incomplete')
        .max(1, 'project_completed must be a boolean: 1 for complete, 0 for incomplete')
});

async function validateProject(req, res, next) {
    try {
        const validatedBody = await projectSchema.validate(req.body, {
            stripUnknown: true
        })
        req.body = validatedBody;
        next();
    } catch (err) {
        next({ status: 400, message: err.message });
    }
}

async function checkExistingProject(req, res, next) {
    try {
        const project = await Projects.getProjectById(req.body.project_id);
        if (!project) {
            next({ status: 400, message: `project with project_id ${req.body.project_id} does not exist - please provide a project_id for an existing project` });
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
}

const resourceSchema = yup.object({
    resource_name: yup.string()
        .trim()
        .required('resource_name is required'),
    resource_description: yup.string()
        .trim()
});

async function validateResource(req, res, next) {
    try {
        const validatedBody = await resourceSchema.validate(req.body, {
            stripUnknown: true
        })
        req.body = validatedBody;
        next();
    } catch (err) {
        next({ status: 400, message: err.message });
    }
}

async function checkUniqueResource(req, res, next) {
    try {
        const resource = await Resources.getResourceByName(req.body.resource_name);
        if (!resource) {
            next();
        } else {
            next({ status: 400, message: `resource with resource_name "${req.body.resource_name}" already exists` });
        }
    } catch (err) {
        next(err);
    }
}

const taskSchema = yup.object({
    task_description: yup.string()
        .trim()
        .required('task_description is required'),
    task_notes: yup.string()
        .trim(),
    task_completed: yup.number()
        .min(0, 'task_completed must be a boolean: 1 for complete, 0 for incomplete')
        .max(1, 'task_completed must be a boolean: 1 for complete, 0 for incomplete'),
    project_id: yup.number()
        .min(1, 'project_id cannot be less than 1')
        .required('project_id is required')
});

async function validateTask(req, res, next) {
    try {
        const validatedBody = await taskSchema.validate(req.body, {
            stripUnknown: true
        })
        req.body = validatedBody;
        next();
    } catch (err) {
        next({ status: 400, message: err.message });
    }
}

module.exports = {
    validateProject,
    checkExistingProject,
    validateResource,
    checkUniqueResource,
    validateTask
}
