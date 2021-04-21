import Sequelize, { Model } from 'sequelize';

class Contact extends Model {
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
        email: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        phone_number: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        message: {
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

export default Contact;
