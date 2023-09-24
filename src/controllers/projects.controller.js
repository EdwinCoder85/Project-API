import Project from '../models/projects.model.js';
import Task from '../models/tasks.model.js';

export const getProjects = async (req, res) => {
  try {
    // throw new Error('query failed')
    const projects = await Project.findAll()
    res.json(projects)
  } catch (error) {
    res.status(500).json({message: error.message});
  }

  // res.send('getting projects')
  // const projects = await Project.findAll()
  // res.json(projects)
  // console.log(projects);
  // res.send('projects');
}

export const getProject = async (req, res) => {
  try {
    const {id} = req.params;
    const project = await Project.findOne({
      where: {id}
    });

    if (!project) {
      return res.status(404).json({message: 'Project does not exists'});
    }
    res.json(project)
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

export const createProject = async (req, res) => {
  const {name, priority, description} = req.body

  try {
    const newProject = await Project.create({
      name,
      description,
      priority
    })
    res.json(newProject)
  } catch (error) {
    res.status(500).json({message: error.message});
  }
  
  // console.log(newProject);
  // res.send('creating projects')
}

export const updateProject = async (req, res) => {
  try {
    const {id} = req.params;
    const {name, priority, description} = req.body;
  
    const project = await Project.findByPk(id);
    project.name = name;
    project.priority = priority;
    project.description = description;
    await project.save();
    res.json(project);
    // res.send('updating project')
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

export const deleteProject = async (req, res) => {
  // console.log(req.params.id);
  try {
    const {id} = req.params;
    await Project.destroy({
      where: {
        id,
      }
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
  // res.send('deleting project');
}

export const getProjectTasks = async (req, res) => {
  try {
    const {id} = req.params;
    const task = await Task.findAll({
      where: {projectId: id}
    });
    res.json(task);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}