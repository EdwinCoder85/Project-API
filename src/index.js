import app from './app.js';
import db from './database/database.js';

import Project from './models/projects.model.js';
import Task from './models/tasks.model.js';

async function main() {
  try {
    // await db.authenticate();
    await db.sync();
    console.log('Connection has been established successully.');
    app.listen(3000);
    console.log('Server is listening on port', 3000);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

main();

