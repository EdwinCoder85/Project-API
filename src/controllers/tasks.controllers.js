import Task from '../models/tasks.model.js';

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll()
    res.json(tasks)
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

export const createTask = async (req, res) => {
  const {name, done, projectId} = req.body;

  try {
    const newTask = await Task.create({
      name,
      done,
      projectId
    })
    res.json(newTask)
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

export const getTask = async (req, res) => {
  const {id} = req.params;
  try {
    const task = await Task.findOne({
      where: {id},
      attributes: ['name','done']
    });
    res.json(task)
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

export const updateTask = async (req, res) => {
  try {
    const {id} = req.params;
    const task = await Task.findOne({
      where: {id}
    });
    task.set(req.body);
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

export const deleteTask = async (req, res) => {
  const {id} = req.params;
  try {
    const task = await Task.destroy({
      where: {id}
    })
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}