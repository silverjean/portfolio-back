module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'users',
      },
      [
        {
          user: 'admin',
          password_hash:
            '$2a$08$07micaDbSZ4De5Ro/Rrdd.SnZ7etNvQJxfvEb3sRa2BEGt3HXjaqe',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      {
        tableName: 'users',
      },
      null,
      {}
    );
  },
};
