import {Sequelize} from 'sequelize';

const db = new Sequelize({
  host: 'localhost',
  database: 'projectsdb',
  username: 'postgres',
  password: 'root',
  dialect: 'postgres'
});

export default db;