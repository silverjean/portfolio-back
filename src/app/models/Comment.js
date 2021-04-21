import Sequelize, { Model } from 'sequelize';

class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        content: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Comment;
