module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comments', {
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
      created_at: { type: Sequelize.DataTypes.DATE },
      updated_at: { type: Sequelize.DataTypes.DATE },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('comments');
  },
};
