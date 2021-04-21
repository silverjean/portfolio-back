module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      password_hash: {
        type: Sequelize.DataTypes.STRING,
      },
      created_at: { type: Sequelize.DataTypes.DATE },
      updated_at: { type: Sequelize.DataTypes.DATE },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
