import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import User from '../app/models/User';
import Comment from '../app/models/Comment';
import Contact from '../app/models/Contact';

const models = [User, Comment, Contact];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
