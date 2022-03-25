const projects = [
    { project_name: 'meal prep', project_description: 'make meals for the week', project_completed: true },
    { project_name: '', project_description: '', project_completed: true },
    { project_name: '', project_description: '', project_completed: true }
]

const project_resources = [
    { project_id: , resource_id:  },
    { project_id: , resource_id:  },
    { project_id: , resource_id:  },
    { project_id: , resource_id:  },
    { project_id: , resource_id:  }
]

const resources = [
    { resource_name: '', resource_description: '' },
    { resource_name: '', resource_description: '' },
    { resource_name: '', resource_description: '' },
    { resource_name: '', resource_description: '' },
    { resource_name: '', resource_description: '' }
]

const tasks = [
    { task_description: '', task_notes: '', task_completed: true, project_id:  },
    { task_description: '', task_notes: '', task_completed: true, project_id:  },
    { task_description: '', task_notes: '', task_completed: true, project_id:  },
    { task_description: '', task_notes: '', task_completed: true, project_id:  },
    { task_description: '', task_notes: '', task_completed: true, project_id:  },
    { task_description: '', task_notes: '', task_completed: true, project_id:  },
    { task_description: '', task_notes: '', task_completed: true, project_id:  },
    { task_description: '', task_notes: '', task_completed: true, project_id:  },
    { task_description: '', task_notes: '', task_completed: true, project_id:  }
]

exports.seed = async function(knex) {
    await knex('projects').insert(projects);
    await knex('resources').insert(resources);
    await knex('tasks').insert(tasks);
    await knex('project_resources').insert(project_resources);
}