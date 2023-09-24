import { DataTypes } from "sequelize";
import db from "../database/database.js";
import Task from './tasks.model.js';

const Project = db.define(
  "projects",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    priority: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true
  }
);

Project.hasMany(Task, {
  foreignKey: 'projectId',
  sourceKey: 'id'
})

Task.belongsTo(Project, {
  foreignKey: 'projectId',
  targetId: 'id'
})

export default Project;